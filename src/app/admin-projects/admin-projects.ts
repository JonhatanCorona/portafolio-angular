import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataService } from "../fire";


declare var bootstrap: any;

@Component({
  selector: 'app-admin-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-projects.html',
  styleUrls: ['./admin-projects.scss']
})
export class AdminProjects implements OnInit, AfterViewInit {
  items: any[] = [];
  allItems: any[] = [];
  searchTerm: string = '';
  modalElement: HTMLElement | null = null;

  newItem: any = {
    name: '',
    role: '',
    description: '',
    date: '',
    features: [] as string[],
    technologies: [] as string[],
    githubUrl: '',
    image: '',
    liveDemoUrl: ''
  };

  // Variables auxiliares para input de arrays como string separados por coma
  featuresInput: string = '';
  technologiesInput: string = '';
  expandedItem: any = null;

toggleExpanded(item: any) {
  this.expandedItem = this.expandedItem === item ? null : item;
}


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadItems();
  }

  ngAfterViewInit() {
    this.modalElement = document.getElementById('createProjectModal');
    if (this.modalElement) {
      const modal = new bootstrap.Modal(this.modalElement);
      this.modalElement.addEventListener('hidden.bs.modal', () => {
        this.resetNewItem();
      });
    }
  }

  loadItems() {
    this.dataService.getItems('projects').subscribe(data => {
      this.allItems = data;
      this.items = [...this.allItems];
    });
  }

  filterItems() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.items = [...this.allItems];
    } else {
      this.items = this.allItems.filter(item =>
        item.name.toLowerCase().includes(term) ||
        item.role.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      );
    }
  }

  createItem() {
    // Parsear las cadenas separadas por coma a arrays
    this.newItem.features = this.featuresInput.split(',').map(f => f.trim()).filter(f => f.length > 0);
    this.newItem.technologies = this.technologiesInput.split(',').map(t => t.trim()).filter(t => t.length > 0);

    this.dataService.createItem('projects', this.newItem)
      .then(() => {
        this.resetNewItem();
        this.loadItems();
        this.closeModal();
      })
      .catch(err => console.error('Error creando proyecto:', err));
  }

  deleteItem(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      this.dataService.deleteItem('projects', id)
        .then(() => this.loadItems())
        .catch(err => console.error('Error eliminando proyecto:', err));
    }
  }

  closeModal() {
    if (this.modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(this.modalElement);
      modalInstance?.hide();
    }
  }

  resetNewItem() {
    this.newItem = {
      name: '',
      role: '',
      description: '',
      date: '',
      features: [],
      technologies: [],
      githubUrl: '',
      image: '',
      liveDemoUrl: ''
    };
    this.featuresInput = '';
    this.technologiesInput = '';
  }
}


