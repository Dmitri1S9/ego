from PIL import Image

im = Image.open('wp10612836-fantasy-map-wallpapers (1).jpg')
for i in range(int(3840 / 480)):
    for j in range(int(2400 / 480)):
        im_crop = im.crop((i * 480, j * 480, 480 * (i + 1), 480 * (j + 1)))
        im_crop.save(f'p{i}{j}.jpg', quality=100)

