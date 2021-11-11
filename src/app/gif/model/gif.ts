export type Gif = {
  id: string;
  title: string;
  query?: string;
  images: {
    original: string;
    preview: string;
    compact: string;
    static: string;
  };
};
