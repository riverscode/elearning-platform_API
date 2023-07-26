export interface CourseEssentialData {
  name: string;
  slug: string;
  description: string;
  instructor: string;
}

export interface CourseOptionalData {
  image: string;
  paid: boolean;
  published: boolean;
  price: number;
  duration: string;
  students: string[];
  certificates: string[];
  chapters: string[];
  links: {}[];
}

export type CourseCreationData = CourseEssentialData &
  Partial<CourseOptionalData>;

export class Course {
  name: string;
  slug: string;
  description: string;
  instructor: string;
  image: string | undefined;
  paid: boolean | undefined;
  published: boolean | undefined;
  price: number | undefined;
  duration: string | undefined;
  students: string[] | undefined;
  certificates: string[] | undefined;
  chapters: string[] | undefined;
  links: {}[] | undefined;

  constructor(data: CourseCreationData) {
    this.name = data.name;
    this.slug = data.slug;
    this.description = data.description;
    this.instructor = data.instructor;
    this.image = data.image;
    this.paid = data.paid;
    this.published = data.published;
    this.price = data.price;
    this.duration = data.duration;
    this.students = data.students;
    this.certificates = data.certificates;
    this.chapters = data.chapters;
    this.links = data.links;
  }
}
