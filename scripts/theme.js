document.getElementById('theme-Button').addEventListener('click', function(event){
    
    const colors = ["#ffb6c1", // Light Pink
                    "#e6e6fa", // Lavender
                    "#87cefa", // Light Sky Blue
                    "#98fb98", // Pale Green
                    "#ffffe0", // Light Yellow
                    "#ffdab9", // Peach
                    "#f5fffa", // Mint Cream
                    "#f0fff0", // Honeydew
                    "#f08080", // Light Coral
                    "#ffe4e1", // Misty Rose
                    "#ffa07a", // Light Salmon
                    "#20b2aa", // Light Sea Green
                    "#778899", // Light Slate Gray
                    "#b0c4de", // Light Steel Blue
                    "#ff69b4", // Hot Pink
                    "#ff4500", // Orange Red
                    "#ff8c00", // Dark Orange
                    "#ffd700", // Gold
                    "#da70d6", // Orchid
                    "#9370db", // Medium Purple
                    "#8a2be2", // Blue Violet
                    "#7b68ee", // Medium Slate Blue
                    "#6a5acd", // Slate Blue
                    "#483d8b", // Dark Slate Blue
                    "#2f4f4f", // Dark Slate Gray
                    "#008080", // Teal
                    "#00ced1", // Dark Turquoise
                    "#00fa9a", // Medium Spring Green
                    "#7cfc00", // Lawn Green
                    "#adff2f", // Green Yellow
                    "#ff6347", // Tomato
                    "#ff7f50", // Coral
                    "#cd853f", // Peru
                    "#d2691e", // Chocolate
                    "#8b4513", // Saddle Brown
                    "#a0522d", // Sienna
                    "#d2b48c", // Tan
                    "#deb887", // Burly Wood
                    "#f4a460", // Sandy Brown
                    "#bc8f8f", // Rosy Brown
                    "#dda0dd", // Plum
                    "#ee82ee", // Violet
                    "#ba55d3", // Medium Orchid
                    "#9932cc", // Dark Orchid
                    "#8b008b", // Dark Magenta
                    "#800080", // Purple
                    "#4b0082", // Indigo
                    "#191970", // Midnight Blue
                    "#000080", // Navy
                    "#00008b", // Dark Blue
                    "#0000cd", // Medium Blue
                    "#0000ff", // Blue
                    "#1e90ff", // Dodger Blue
                    "#00bfff", // Deep Sky Blue
                    "#87ceeb", // Sky Blue
                    "#add8e6", // Light Blue
                    "#b0e0e6", // Powder Blue
                    "#afeeee", // Pale Turquoise
                    "#00ffff", // Aqua
                    "#e0ffff", // Light Cyan
                    "#f0ffff", // Azure
                    "#f5f5dc", // Beige
                    "#ffe4c4", // Bisque
                    "#ffebcd", // Blanched Almond
                    "#f5deb3", // Wheat
                    "#fff8dc", // Cornsilk
                    "#fffacd", // Lemon Chiffon
                    "#fafad2", // Light Goldenrod Yellow
                    "#fffff0", // Ivory
                    "#f0e68c", // Khaki
                    "#eee8aa", // Pale Goldenrod
                    "#bdb76b", // Dark Khaki
                    "#8b0000", // Dark Red
                    "#a52a2a", // Brown
                    "#dc143c", // Crimson
                    "#ff0000", // Red
                    "#ff1493", // Deep Pink
                    "#ff00ff", // Fuchsia
                    "#d8bfd8", // Thistle
                    "#dda0dd", // Plum
                    "#ffc0cb", // Pink
                    "#ffb6c1", // Light Pink
                    "#ffe4e1", // Misty Rose
                    "#fff0f5", // Lavender Blush
                    "#faebd7"  // Antique White
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('body').style.backgroundColor = randomColor;

    console.log("selected color: ", randomColor);
  
});