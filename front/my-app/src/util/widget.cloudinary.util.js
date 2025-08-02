export function WidgetCloudinary() {
  if (document.getElementById("cloudinary-widget-script")) return;

  const script = document.createElement("script");
  script.src = "https://upload-widget.cloudinary.com/global/all.js";
  script.id = "cloudinary-widget-script";
  script.async = true;
  document.body.appendChild(script);

}

