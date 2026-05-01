# 🔧 Troubleshooting Guide

## Common Issues & Solutions

---

## 🖼️ Image Issues

### Issue: Image Not Showing (Placeholder Visible)

**Symptoms:**
- Colored gradient box instead of photo
- Shows file path like `/images/hero/hero-background.jpg`
- Icon visible in placeholder

**Solutions:**

1. **Check File Location**
   ```
   ✅ Correct: public/images/hero/hero-background.jpg
   ❌ Wrong: images/hero/hero-background.jpg
   ❌ Wrong: src/images/hero/hero-background.jpg
   ```

2. **Check Filename Match**
   - Filenames are **case-sensitive**
   - `Hero-Background.jpg` ≠ `hero-background.jpg`
   - Use exact filename from config

3. **Check File Extension**
   - Config says `.jpg` but file is `.jpeg`? Won't work!
   - Config says `.png` but file is `.jpg`? Won't work!
   - Match extensions exactly

4. **Hard Refresh Browser**
   - Windows/Linux: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`
   - Or clear browser cache

---

### Issue: Image Loads but Looks Blurry/Pixelated

**Solutions:**

1. **Use Higher Resolution**
   - Hero: minimum 1920x1080px
   - Gallery: minimum 1200x900px
   - Team: minimum 800x800px
   - Testimonials: minimum 400x400px

2. **Don't Stretch Small Images**
   - If image is too small, it will look blurry
   - Use original size or larger images

3. **Check Image Quality**
   - Don't over-compress images
   - Use JPG quality 80-90%
   - Avoid heavily compressed images

---

### Issue: Website Loads Slowly

**Solutions:**

1. **Compress Images**
   - Use [TinyPNG.com](https://tinypng.com)
   - Use [Squoosh.app](https://squoosh.app)
   - Target: under 500KB per image

2. **Resize Images**
   - Don't use 4000px images if only showing 1920px
   - Resize to recommended dimensions
   - Reduces file size significantly

3. **Convert Format**
   - PNG files are often larger
   - Convert to JPG for photos
   - Keep PNG only for logos/graphics

---

### Issue: Wrong Image Showing

**Solutions:**

1. **Clear Browser Cache**
   - Old image might be cached
   - Hard refresh (Ctrl+F5)

2. **Check Filename**
   - Multiple files with similar names?
   - Verify exact filename in config

3. **Restart Development Server**
   - Stop the server
   - Start it again
   - Should reload images

---

## 🔧 Technical Issues

### Issue: Image Status Checker Not Showing

**Solutions:**

1. **Check It's Imported**
   ```typescript
   // In /src/app/App.tsx
   import { ImageStatusChecker } from "./components/ImageStatusChecker";
   
   // In the return statement
   <ImageStatusChecker />
   ```

2. **Look for Blue Button**
   - Bottom-right corner
   - Above WhatsApp button
   - Click to open panel

3. **Console Errors?**
   - Open browser developer tools (F12)
   - Check for errors
   - Report error message

---

### Issue: LocalImage Component Error

**Error:** `Cannot find module './LocalImage'`

**Solutions:**

1. **Check File Exists**
   - `/src/app/components/LocalImage.tsx` should exist

2. **Check Import Path**
   ```typescript
   // Correct
   import { LocalImage } from "./LocalImage";
   
   // Also correct (from components)
   import { LocalImage } from "../components/LocalImage";
   ```

3. **Restart Development Server**

---

### Issue: imageConfig Not Found

**Error:** `Cannot find module '../config/imageConfig'`

**Solutions:**

1. **Check File Exists**
   - `/src/app/config/imageConfig.ts` should exist

2. **Create Config Folder**
   ```bash
   mkdir /src/app/config
   ```

3. **Verify Import Path**
   ```typescript
   import { images } from "../config/imageConfig";
   ```

---

## 📱 Mobile/Responsive Issues

### Issue: Images Too Large on Mobile

**Solutions:**

1. **Already Handled!**
   - Components use responsive classes
   - Images scale automatically

2. **Test on Real Device**
   - Desktop browser "mobile mode" isn't perfect
   - Test on actual phone if possible

3. **Check Object-Fit**
   - Images use `object-cover` class
   - Should maintain aspect ratio

---

### Issue: Layout Breaks on Mobile

**Solutions:**

1. **Check Browser Width**
   - Resize browser to mobile size
   - Check at 375px, 768px, 1024px

2. **Test Different Aspect Ratios**
   - Some photos might be too tall/wide
   - Try different images

3. **Check Tailwind Classes**
   - Components use `sm:`, `md:`, `lg:` breakpoints
   - Should be responsive by default

---

## ⚙️ Configuration Issues

### Issue: Want to Use Different Filenames

**Solution:**

Edit `/src/app/config/imageConfig.ts`:

```typescript
export const images = {
  hero: {
    background: "/images/hero/MY-CUSTOM-NAME.jpg",  // ← Change here
  },
  gallery: [
    {
      url: "/images/gallery/MY-PHOTO-1.jpg",  // ← Change here
      title: "Custom Title",
      description: "Custom description"
    },
    // ... more
  ]
}
```

---

### Issue: Want to Change Image Descriptions

**Solution:**

Same file - `/src/app/config/imageConfig.ts`:

```typescript
gallery: [
  {
    url: "/images/gallery/children-education.jpg",
    title: "NEW TITLE HERE",        // ← Edit this
    description: "NEW DESCRIPTION"  // ← Edit this
  }
]
```

---

### Issue: Want to Add More Gallery Images

**Solution:**

1. **Add Image File**
   - Put in `/public/images/gallery/`

2. **Update Config**
   ```typescript
   gallery: [
     // ... existing images
     {
       url: "/images/gallery/new-photo.jpg",
       title: "New Photo",
       description: "Description"
     }
   ]
   ```

---

## 🌐 Browser Issues

### Issue: Works in Chrome but Not Safari

**Solutions:**

1. **Check Image Format**
   - Safari might not support some formats
   - Use JPG or PNG (universal support)

2. **Clear Safari Cache**
   - Safari → Preferences → Privacy → Manage Website Data

3. **Test in Multiple Browsers**
   - Chrome, Firefox, Safari, Edge

---

### Issue: Images Not Showing in Production

**Solutions:**

1. **Check Build Process**
   - Did you include `/public/` folder in build?
   - Images should be in build output

2. **Check Deploy Settings**
   - Verify static files are deployed
   - Check `/public/` is included

3. **Check Paths**
   - Paths start with `/images/` not `/public/images/`
   - Public folder is served from root

---

## 📞 Still Having Issues?

### Debug Checklist:

- [ ] Checked file exists at exact path
- [ ] Verified filename matches exactly (case-sensitive)
- [ ] Cleared browser cache
- [ ] Restarted development server
- [ ] Checked browser console for errors (F12)
- [ ] Used Image Status Checker tool
- [ ] Tested in different browser
- [ ] Hard refreshed page (Ctrl+F5)

### Get More Help:

1. **Check Documentation:**
   - `/IMAGE_SETUP_INSTRUCTIONS.md`
   - `/QUICK_START_GUIDE.md`
   - `/IMPLEMENTATION_SUMMARY.md`

2. **Use Developer Tools:**
   - Press F12 in browser
   - Check Console tab for errors
   - Check Network tab to see if images load

3. **Image Status Checker:**
   - Click blue button (bottom-right)
   - Shows exactly which images are loaded/missing
   - Shows expected file paths

---

## ✅ Prevention Tips

1. **Use Consistent Naming**
   - Lowercase filenames
   - Hyphens instead of spaces
   - Clear, descriptive names

2. **Keep Original Backups**
   - Don't delete original photos
   - Keep high-res versions separate
   - Easy to replace if needed

3. **Test After Each Change**
   - Add one image at a time
   - Check it works before moving on
   - Easier to identify issues

4. **Document Your Changes**
   - Keep notes on custom filenames
   - Track which photos are where
   - Helps future updates

---

**Most issues are simple fixes! Check file paths and filenames first.** 🎯
