var cloudinary = require("cloudinary-core");
var cl = new cloudinary.Cloudinary({cloud_name: "gabycodes", secure: true});

<div>
<script src="[folder-path]/jquery/dist/jquery.js" type="text/javascript"></script>
<script src="[folder-path]/blueimp-file-upload/js/vendor/jquery.ui.widget.js" type="text/javascript"></script>
<script src="[folder-path]/blueimp-file-upload/js/jquery.iframe-transport.js" type="text/javascript"></script>
<script src="[folder-path]/blueimp-file-upload/js/jquery.fileupload.js" type="text/javascript"></script>
<script src="[folder-path]/cloudinary-jquery-file-upload/cloudinary-jquery-file-upload.js" type="text/javascript"></script>
</div>

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

// direct upload file tag
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

// display newly updated picture
cloudinary.image(photo.public_id, { format: "jpg", crop: "fill", width: 120, height: 80 });

// Additional direct uploading options

// Preview thumbnail, progress indication, multiple images
$('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
  $('.preview').html(
    $.cloudinary.image(data.result.public_id,
      { format: data.result.format, version: data.result.version,
        crop: 'fill', width: 150, height: 100 })
  );
  $('.image_public_id').val(data.result.public_id);
  return true;
});

$('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) {
  $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');
});


// upload multiple images
cloudinary.v2.uploader.image_upload_tag('image_id', { html: { multiple: 1 } });


;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'load-image',
            'load-image-meta',
            'load-image-scale',
            'load-image-exif',
            'canvas-to-blob',
            './jquery.fileupload-process'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('blueimp-load-image/js/load-image'),
            require('blueimp-load-image/js/load-image-meta'),
            require('blueimp-load-image/js/load-image-scale'),
            require('blueimp-load-image/js/load-image-exif'),
            require('blueimp-canvas-to-blob'),
            require('./jquery.fileupload-process')
        );
    } else {
        // Browser globals:
        factory(
            window.jQuery,
            window.loadImage
        );
    }
}(function ($, loadImage) {
    'use strict';

    // Prepend to the default processQueue:
    $.blueimp.fileupload.prototype.options.processQueue.unshift(
        {
            action: 'loadImageMetaData',
            disableImageHead: '@',
            disableExif: '@',
            disableExifThumbnail: '@',
            disableExifSub: '@',
            disableExifGps: '@',
            disabled: '@disableImageMetaDataLoad'
        },
        {
            action: 'loadImage',
            // Use the action as prefix for the "@" options:
            prefix: true,
            fileTypes: '@',
            maxFileSize: '@',
            noRevoke: '@',
            disabled: '@disableImageLoad'
        },
        {
            action: 'resizeImage',
            // Use "image" as prefix for the "@" options:
            prefix: 'image',
            maxWidth: '@',
            maxHeight: '@',
            minWidth: '@',
            minHeight: '@',
            crop: '@',
            orientation: '@',
            forceResize: '@',
            disabled: '@disableImageResize'
        },
        {
            action: 'saveImage',
            quality: '@imageQuality',
            type: '@imageType',
            disabled: '@disableImageResize'
        },
        {
            action: 'saveImageMetaData',
            disabled: '@disableImageMetaDataSave'
        },
        {
            action: 'resizeImage',
            // Use "preview" as prefix for the "@" options:
            prefix: 'preview',
            maxWidth: '@',
            maxHeight: '@',
            minWidth: '@',
            minHeight: '@',
            crop: '@',
            orientation: '@',
            thumbnail: '@',
            canvas: '@',
            disabled: '@disableImagePreview'
        },
        {
            action: 'setImage',
            name: '@imagePreviewName',
            disabled: '@disableImagePreview'
        },
        {
            action: 'deleteImageReferences',
            disabled: '@disableImageReferencesDeletion'
        }
    );




