# Image Upload Guide for FLI Golf Presentation

## Directory Structure

All images should be placed in the `/public/images/` directory:

```
public/images/
├── brand/
│   └── shields/
│       └── FGL_logo_CMYK-01.png
├── teams/
│   ├── logos/
│   │   ├── ace_makers_logo.png
│   │   ├── birdie_storm_regular.png
│   │   ├── chain_breakers_regular.jpg
│   │   └── ... (12 team logos total)
│   └── mini-logos/
│       ├── ace_makers_mini_logo.jpg
│       ├── birdie_storm_mini.jpg
│       └── ... (12 mini logos total)
└── players/
    ├── male/
    │   ├── player-1.jpg
    │   ├── player-2.jpg
    │   └── ... (12 male players)
    └── female/
        ├── player-1.jpg
        ├── player-2.jpg
        └── ... (12 female players)
```

## Image Requirements

### Brand Logo
- **Location**: `public/images/brand/shields/FGL_logo_CMYK-01.png`
- **Format**: PNG with transparency preferred
- **Size**: Recommended 500x500px minimum
- **Usage**: Appears on multiple slides

### Team Logos
- **Location**: `public/images/teams/logos/`
- **Format**: PNG or JPG
- **Size**: 400x400px minimum (square format)
- **Naming**: Use descriptive names matching team names
- **Count**: 12 teams total

### Team Mini Logos
- **Location**: `public/images/teams/mini-logos/`
- **Format**: PNG or JPG
- **Size**: 200x200px minimum (square format)
- **Naming**: Same as regular logos with "_mini" suffix
- **Count**: 12 teams total

### Player Photos
- **Location**: 
  - Male: `public/images/players/male/`
  - Female: `public/images/players/female/`
- **Format**: JPG preferred
- **Size**: 400x400px minimum (square format for circular display)
- **Naming**: `player-1.jpg`, `player-2.jpg`, etc.
- **Count**: 12 male + 12 female = 24 total

## How to Add Images

### Option 1: Using the File Explorer (Recommended)
1. In VS Code, navigate to the `public/images/` folder
2. Right-click on the appropriate subfolder
3. Select "Upload Files"
4. Choose your images
5. Ensure filenames match the expected names

### Option 2: Using the Terminal
```bash
# Navigate to the images directory
cd /workspaces/slides/public/images

# Upload to appropriate folder
# Example: copy team logos
cp /path/to/your/logos/* teams/logos/

# Example: copy player photos
cp /path/to/male/photos/* players/male/
cp /path/to/female/photos/* players/female/
```

### Option 3: Drag and Drop
1. Open the VS Code file explorer
2. Navigate to the target folder
3. Drag and drop your images from your computer

## Updating Slides After Adding Images

Once images are uploaded, you'll need to update the slide code to reference them:

### For Team Logos (Slide 12)
Replace the emoji placeholders with actual image tags:
```svelte
<img src="/images/teams/logos/ace_makers_logo.png" class="w-32 h-32 mx-auto object-contain" alt="Ace Makers" />
```

### For Player Photos
Uncomment the player grid sections and update with actual names and teams.

## Image Optimization Tips

1. **Compress images** before uploading to reduce file size
2. **Use consistent dimensions** for each category
3. **PNG for logos** (supports transparency)
4. **JPG for photos** (smaller file size)
5. **Keep total size under 10MB** for fast loading

## Troubleshooting

**Images not showing?**
- Check file paths are correct (case-sensitive)
- Verify images are in `/public/images/` not `/src/images/`
- Clear browser cache and refresh
- Check browser console for 404 errors

**Images look blurry?**
- Upload higher resolution images
- Ensure minimum dimensions are met
- Use 2x resolution for retina displays

## Need Help?

If you need assistance updating the slides after adding images, let me know which images you've uploaded and I'll update the code accordingly.
