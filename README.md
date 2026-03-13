# Simple UI Components
A lightweight JavaScript utility for adding Dropdown menus and Carousel sliders to your website with minimal setup

## Features 
- Dropdown menu toggle
Carousel navigation (next / previous)
Automatic slideshow
Indicator-based slide navigation
Lightweight and dependency-free

## Installation
npm install clem-drop-carousel

## Import
import { 
    showDropDownMenu, 
    next, previous, 
    slideShow, 
    changeSlideByIndicator 
} from "clem-drop-carousel"

## Dropdown Menu
### Required HTML Structure
<div class="dropdown"> 
    <button class="dropdown-btn">Menu</button> 
    <div class="dropdown-menu"> 
        <a href="#">Item 1</a> 
        <a href="#">Item 2</a>
     </div> 
</div>

### Usage
showDropDownMenu();

## Carousel
### Required HTML Structure

<div class="carousel"> 
    <button class="prev">Prev
    </button> <button class="next">Next</button> 
    <div class="carousel-slide active">Slide 1</div> 
    <div class="carousel-slide">Slide 2</div> 
    <div class="carousel-slide">Slide 3</div> 
    <div class="carousel-indicator"> 
        <span class="dash active"></span> 
        <span class="dash"></span> 
        <span class="dash"></span> 
    </div> 
</div>

### Usage
#### Next Button
next();
#### Previous Button
previous(); 
#### Automatic Slideshow
slideShow(5000); // 5 seconds
#### Change Slide Using Indicators
changeSlideByIndicator();

## Note
Make sure your CSS includes an .active class to control which slide is visible.

Example:

.carousel-slide {
  display: none;
}

.carousel-slide.active {
  display: block;
}
