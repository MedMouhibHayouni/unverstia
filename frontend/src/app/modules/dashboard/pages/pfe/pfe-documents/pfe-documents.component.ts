import { Component, ViewChild, ElementRef } from '@angular/core';
import { PfeService } from '../../../../../services/pfe.service';
import { DocumentType } from '../../../../../core/enum/pfe.enum';

@Component({
  selector: 'app-pfe-documents',
  templateUrl: './pfe-documents.component.html',
  styleUrls: ['./pfe-documents.component.scss'],
})
export class PfeDocumentsComponent {
  fileTypes = ['proposal', 'report', 'presentation', 'other'];

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private pfeService: PfeService) {}

  onFileUpload(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const formData = new FormData();
      formData.append('pfe_id', '1');
      formData.append('type', type);
      formData.append('file', file);

      this.pfeService.uploadDocument(formData).subscribe(() => {
        alert('Document téléchargé avec succès');
      });
    }
  }

  triggerInput(type: string, event: Event): void {
    const inputElement = (event.currentTarget as HTMLElement).querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (inputElement) inputElement.click();
  }


}
