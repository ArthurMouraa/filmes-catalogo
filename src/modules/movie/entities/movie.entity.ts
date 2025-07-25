

export class MovieEntity {

  private title:string;
  private category:string;
  private movie_url:string;
  private image_url?:string;
  private description:string;
  private publication_in: string;

  
  


  constructor(title:string, category:string, movie_url:string, image_url?:string){
    this.title = title;
    this.category = category;
    this.movie_url = movie_url;
    this.image_url = image_url;
  }

  get getTitle(): string{
    return this.title;
  }

  set setTitle(title:string){
    this.title = title;
  }

   get getCategory(): string{
    return this.category;
  }

  set setCategory(category:string){
    this.title = category;
  }


   get getMovieUrl(): string{
    return this.movie_url;
  }

  set setMovieUrl(movieUrl:string){
    this.movie_url = movieUrl;
  }

   get getImageUrl(): string|undefined{
    return this.image_url;
  }

  set setImageUrl(imageUrl:string){
    this.image_url = imageUrl;
  }






}