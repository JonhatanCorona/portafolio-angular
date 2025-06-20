import { Component, OnInit } from '@angular/core';
import { DataService } from '../fire';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-about.html',
  styleUrl: './admin-about.scss'
})
export class AdminAbout implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {
    console.log('AdminAbout constructor - DataService instance:', this.dataService);
  }

  

  ngOnInit() {
    console.log('AdminAbout ngOnInit');

    this.getAboutItems();
  }

getAboutItems() {
  this.dataService.getItems('about').subscribe(data => {
    if (data && data.length > 0) {
      const firstItem = data[0];
      this.items = [
        { id: firstItem.id, key: 'name', label: 'Nombre', value: firstItem.name, newValue: firstItem.name, isEditing: false },
        { id: firstItem.id, key: 'lastName', label: 'Apellido', value: firstItem.lastName, newValue: firstItem.lastName, isEditing: false },
        { id: firstItem.id, key: 'email', label: 'Email', value: firstItem.email, newValue: firstItem.email, isEditing: false },
        { id: firstItem.id, key: 'github', label: 'GitHub', value: firstItem.github, newValue: firstItem.github, isEditing: false },
        { id: firstItem.id, key: 'linkedin', label: 'LinkedIn', value: firstItem.linkedin, newValue: firstItem.linkedin, isEditing: false },
        { id: firstItem.id, key: 'aboutMe', label: 'Presentacion', value: firstItem.aboutMe, newValue: firstItem.aboutMe, isEditing: false },
      ];
    }
  });
}

enableEditing(item: any) {
  item.isEditing = true;
  item.newValue = item.value;
}

  saveValue(item: any) {
  const updatedData = { [item.key]: item.newValue };
  console.log(`Saving updated ${item.key}:`, updatedData, 'for item id:', item.id);

  this.dataService.updateItem('about', item.id, updatedData)
    .then(() => {
      console.log(`${item.key} updated successfully`);
      item.value = item.newValue;
      item.isEditing = false;
    })
    .catch(err => console.error(`Error updating ${item.key}:`, err));
}


cancelEdit(item: any) {
  item.isEditing = false;
  item.newValue = '';
}


}
