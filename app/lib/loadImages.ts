declare const require: any; 

export function loadImagesFromFolder() {
    const context = require.context(
      "@/app/assets/images/voxa",
      false,
      /\.(png|jpe?g|PNG|JPG|JPEG)$/
    );
  
    return context.keys().map((key: string) => {
      const mod = context(key);
      return mod.default.src;
    });
  }