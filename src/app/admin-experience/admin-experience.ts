import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../fire';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Experience } from '../models/interface';

declare var bootstrap: any;
@Component({
  selector: 'app-admin-experience',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-experience.html',
  styleUrl: './admin-experience.scss'
})
export class AdminExperience implements OnInit, AfterViewInit {
  items: Experience[] = [];
  allItems: Experience[] = [];      
  showCreateForm = false;
  newItem = {
    cargo: '',
    empresa: '',
    fecha: '',
    funcion: '',
    modalidad: '',
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
    cargo: '',
    empresa: '',
    fecha: '',
    funcion: '',
    modalidad: '',
      };
    });
  }
}


  loadItems() {
  this.dataService.getItems('experience').subscribe(data => {
    this.allItems = data;
    this.items = [...this.allItems];
    console.log('Items cargados:', this.items);
  });}


  createItem() {
  console.log('Guardando item...', this.newItem);
  
  this.dataService.createItem('experience', this.newItem)
  .then(() => {
    this.newItem = {
    cargo: '',
    empresa: '',
    fecha: '',
    funcion: '',
    modalidad: '',
    };
    this.loadItems();
    this.closeModal();
    window.location.reload();
  
  })
  .catch(err => console.error('Error creando experiencia:', err));
}

closeModal() {
if (this.modalElement) {
  const modalInstance = bootstrap.Modal.getInstance(this.modalElement);
  modalInstance?.hide();
}
}

  deleteItem(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este experiencia profesional?')) {
      this.dataService.deleteItem('experience', id)
        .then(() => this.loadItems())
        .catch(err => console.error('Error eliminando experiencia:', err));
    }
  }

}

