# Creating PowerPoint Slides with Images in Python

## Prerequisite

Install the `python-pptx` module

## Code

```python
import pptx

img_list = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
]

prs = pptx.Presentation()
title_only_slide_layout = prs.slide_layouts[5]

for img_path in img_list:
    slide = prs.slides.add_slide(title_only_slide_layout)
    slide.shapes.title.text = f'{img_path.stem}'

    pic_pos = (
        pptx.util.Inches(0.5),  # left
        pptx.util.Inches(1.75), # top
        pptx.util.Inches(9),    # width
        pptx.util.Inches(5),    # height
    )

    pic = slide.shapes.add_picture(img_path, pic_pos[0],  pic_pos[1], pic_pos[2], pic_pos[3])

prs.save('test.pptx')
```

## Reference

* https://python-pptx.readthedocs.io/en/latest/
* https://stackoverflow.com/questions/44275443/python-inserts-pictures-to-powerpoint-how-to-set-the-width-and-height-of-the-pi
* https://www.geeksforgeeks.org/creating-and-updating-powerpoint-presentations-in-python-using-python-pptx/