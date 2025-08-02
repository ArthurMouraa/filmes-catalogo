
export class Movie {

  public readonly id?: number;

  public imageUrl: string;
  public movieUrl: string;
  public title: string;
  public category: string;
  public year: string;
  public description: string;

  constructor(props: {
    imageUrl: string;
    movieUrl: string;
    title: string;
    category: string;
    year: string;
    description: string;
    id?: number;
  }) {
    this.imageUrl = props.imageUrl;
    this.movieUrl = props.movieUrl;
    this.title = props.title;
    this.category = props.category;
    this.year = props.year;
    this.description = props.description;
    this.id = props.id;
  }


  get getId(): number | undefined {
    return this.id;
  }


  get getImageUrl(): string {
    return this.imageUrl
  }

  get getMovieUrl(): string {
    return this.movieUrl
  }

  get getTitle(): string {
    return this.title
  }

  get getCategory(): string {
    return this.category
  }

  get getYear(): string {
    return this.year
  }

  get getDescription(): string {
    return this.description;
  }

  // Setters
  set setImageUrl(url: string) {
    this.imageUrl = url;
  }

  set stMovieUrl(url: string) {
    this.movieUrl = url;
  }

  set setTitle(title: string) {
    this.title = title;
  }

  set setCategory(category: string) {
    this.category = category;
  }

  set setYear(year: string) {
    this.year = year;
  }

  set setDescription(description: string) {
    this.description = description
  }




}