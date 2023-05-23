var canvas = new fabric.Canvas('myCanvas');

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:block_y,
    Left:block_x
    });
    canvas.add(block_image_object);
    });
}
if(keyPressed == '82')
{
    new_image('rr1.png');
    console.log("r");
}