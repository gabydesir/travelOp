var cloudinary = require("cloudinary-core");
var cl = new cloudinary.Cloudinary({cloud_name: "gabycodes", secure: true});

<div>
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.ui.widget.js"></script>
<script type="text/javascript" src="jquery.iframe-transport.js"></script>
<script type="text/javascript" src="jquery.fileupload.js"></script>
<script type="text/javascript" src="jquery.cloudinary.js"></script>
</div>

$(function() {
  if($.fn.cloudinary_fileupload !== undefined) {
    $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
  }
});

var cloudinary_cors = "https://" + request.headers.host + "/cloudinary_cors.html";

cloudinary.v2.uploader.image_upload_tag('image_id', {callback: cloudinary_cors});

var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;

var preloaded_file = new cloudinary.PreloadedFile(query.image_id);
if (preloaded_file.is_valid()) {
  photo.image_id = preloaded_file.identifier();
} else {
  throw("Invalid upload signature");
}

cloudinary.image(photo.public_id, { format: "jpg", crop: "fill", width: 120, height: 80 });
