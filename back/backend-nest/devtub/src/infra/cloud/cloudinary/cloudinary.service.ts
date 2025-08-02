import { Injectable } from '@nestjs/common';
import cloudinary from './cloudinary.config';

Injectable()
export class CloudinaryService {

  async deleteImage(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
  }


  async deleteVideo(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });
  }

  extractPublicId(url: string): string {
    const parts = url.split('/');
    console.log("parts******************> ", parts)
    const fileName = parts[parts.length - 1];
    console.log("publicid:filename *************>", fileName)
    return fileName.split('.')[0];
  }
}