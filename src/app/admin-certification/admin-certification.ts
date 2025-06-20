import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../fire';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-admin-certification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-certification.html',
  styleUrls: ['./admin-certification.scss']
})
export class AdminCertification implements OnInit, AfterViewInit {
  items: any[] = [];
   allItems: any[] = [];      
  searchTerm: string = ''
  showCreateForm = false;
  newItem = {
    credencial: '',
    fecha: '',
    image: '',
    instituto: '',
    name: '',
    url: ''
  };
  modalElement: HTMLElement | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadItems();
  }

  ngAfterViewInit() {
  this.modalElement = document.getElementById('createCertModal');
  if (this.modalElement) {
    const modal = new bootstrap.Modal(this.modalElement);
    this.modalElement.addEventListener('hidden.bs.modal', () => {
      // Resetear newItem si se cierra manualmente
      this.newItem = {
        credencial: '',
        fecha: '',
        image: '',
        instituto: '',
        name: '',
        url: ''
      };
    });
  }
}


  loadItems() {
    this.dataService.getItems('certification').subscribe(data => {
      this.allItems = data;
      this.items = [...this.allItems];  // Inicialmente muestro todo
    });
  }

   filterItems() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      // Si está vacío, recarga toda la lista
      this.items = [...this.allItems];
    } else {
      this.items = this.allItems.filter(item =>
        item.name.toLowerCase().includes(term) ||
        item.instituto.toLowerCase().includes(term) ||
        item.credencial.toLowerCase().includes(term)
      );
    }
  }

  createItem() {
  console.log('Guardando item...', this.newItem);
  
  this.dataService.createItem('certification', this.newItem)
  .then(() => {
    this.newItem = {
      credencial: '',
      fecha: '',
      image: '',
      instituto: '',
      name: '',
      url: ''
    };
    this.loadItems();
    this.closeModal();
    window.location.reload();
  })
  .catch(err => console.error('Error creando certificado:', err));
}

closeModal() {
if (this.modalElement) {
  const modalInstance = bootstrap.Modal.getInstance(this.modalElement);
  modalInstance?.hide();
}
}

  deleteItem(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este certificado?')) {
      this.dataService.deleteItem('certification', id)
        .then(() => this.loadItems())
        .catch(err => console.error('Error eliminando certificado:', err));
    }
  }

searchItems() {
  this.items = this.items.filter(item =>
    item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
}
