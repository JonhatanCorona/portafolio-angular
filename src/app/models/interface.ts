export interface Certification {
  id: string;
  name: string;
  instituto: string;
  fecha: string;
  credencial: string;
  image: string;
  url: string;
}

export interface Experience {
    id: string;
    cargo: string;
    empresa: string;
    fecha: string;
    funcion: string;
    modalidad: string;
}

export interface Projects {
    id: string;
    name: string;
    role: string;
    description: string;
    date: string;
    features: string[],
    technologies:string[],
    githubUrl: string;
    image: string;
    liveDemoUrl: string;
}
