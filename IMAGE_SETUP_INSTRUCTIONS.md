# 📸 Image Setup Instructions for Beacon of Hope Website

## Overview
Your website is now configured to use **your own local images** instead of internet URLs. This guide will show you exactly how to add your photos.

---

## 🗂️ Step 1: Create the Images Folder Structure

Create these folders in your project's **`public`** directory:

```
public/
└── images/
    ├── hero/              (1 image)
    ├── gallery/           (6 images)
    ├── cta/               (1 image)
    ├── team/              (3 images)
    └── testimonials/      (3 images)
```

**Total images needed:** 14 images

---

## 📋 Step 2: Prepare Your Images

### Image Requirements:
- **Format:** JPG, PNG, or WebP
- **Recommended size:** 1920x1080px (landscape) or 1080x1080px (square)
- **File size:** Keep under 2MB per image for best performance

### Image Categories:

#### 1️⃣ **Hero Section** (1 image)
- **Location:** `public/images/hero/`
- **Filename:** `hero-background.jpg`
- **Description:** Main banner image showing your charity work
- **Suggested content:** Children, community, hope, education
- **Orientation:** Landscape (wide)

---

#### 2️⃣ **Photo Gallery** (6 images)
- **Location:** `public/images/gallery/`
- **Filenames:**
  1. `children-education.jpg` - Children in classroom or learning
  2. `food-distribution.jpg` - Food program or meal distribution
  3. `volunteers-working.jpg` - Volunteers helping in community
  4. `community-outreach.jpg` - Community gathering or event
  5. `children-playing.jpg` - Happy children playing or activities
  6. `healthcare-services.jpg` - Healthcare or medical assistance

---

#### 3️⃣ **CTA Banner** (1 image)
- **Location:** `public/images/cta/`
- **Filename:** `emotional-banner.jpg`
- **Description:** Emotional, impactful photo for the "Change a Life" section
- **Suggested content:** Hopeful family, mother with children, community gathering
- **Orientation:** Landscape

---

#### 4️⃣ **Team Members** (3 images)
- **Location:** `public/images/team/`
- **Filenames:**
  1. `founder.jpg` - Photo of your founder/director
  2. `coordinator.jpg` - Photo of programs coordinator
  3. `volunteer-coordinator.jpg` - Photo of volunteer coordinator

**Requirements:**
- Professional headshots or professional portraits
- Square format (1:1 ratio) works best
- Clear, well-lit photos
- Smiling, approachable faces

---

#### 5️⃣ **Testimonials** (3 images)
- **Location:** `public/images/testimonials/`
- **Filenames:**
  1. `testimonial-1.jpg` - Beneficiary or parent
  2. `testimonial-2.jpg` - Community leader or volunteer
  3. `testimonial-3.jpg` - Donor or supporter

**Note:** These should match the people giving testimonials if possible

---

## 🔧 Step 3: Customize Image Settings

### Edit Names and Descriptions
Open: **`/src/app/config/imageConfig.ts`**

You can customize:
- ✏️ Team member names, roles, and emails
- ✏️ Gallery photo titles and descriptions
- ✏️ Testimonial names, roles, and quotes

---

## ✅ Step 4: Verify Your Images

After adding your images, the website will:
- ✅ Display your photos automatically
- ✅ Show a colored placeholder if an image is missing
- ✅ Display the expected file path on the placeholder (helpful for debugging)

---

## 🎨 What Happens If Images Are Missing?

Don't worry! If an image file is not found:
1. A **gradient placeholder** appears
2. Shows an **icon** and **file path** so you know which image to add
3. The website still works perfectly

**Example placeholder colors:**
- Green gradient for most images
- Blue/purple for testimonials
- Custom colors for special sections

---

## 📝 Quick Checklist

- [ ] Created `/public/images/` folder
- [ ] Created subfolders: `hero`, `gallery`, `cta`, `team`, `testimonials`
- [ ] Added 1 hero background image
- [ ] Added 6 gallery images
- [ ] Added 1 CTA banner image
- [ ] Added 3 team member photos
- [ ] Added 3 testimonial photos
- [ ] Updated names/descriptions in `imageConfig.ts` (optional)
- [ ] Tested the website to see all images loading

---

## 🚀 Advanced: Using Different Filenames

If you want to use **different filenames**, edit:

**File:** `/src/app/config/imageConfig.ts`

**Example:**
```typescript
hero: {
  background: "/images/hero/my-custom-photo.jpg",  // Change this
}
```

---

## 💡 Pro Tips

1. **Use descriptive filenames:** `buea-classroom-2024.jpg` instead of `IMG_001.jpg`
2. **Optimize images:** Use tools like TinyPNG to reduce file size
3. **Backup originals:** Keep original high-res photos in a separate folder
4. **Test on mobile:** Make sure images look good on phone screens too
5. **Update regularly:** Swap out old photos with fresh content to keep site engaging

---

## ❓ Troubleshooting

### Image not showing?
1. Check the file path is correct (case-sensitive!)
2. Make sure image is in the `public/images/` folder
3. Check the file extension matches (`.jpg` vs `.jpeg`)
4. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)

### Image too large/slow?
- Compress your images using [TinyPNG](https://tinypng.com)
- Resize to recommended dimensions (1920x1080px max)

### Wrong image showing?
- Clear your browser cache
- Check the filename in `imageConfig.ts` matches your actual file

---

## 📞 Need Help?

All image paths are centralized in one file for easy management:
**`/src/app/config/imageConfig.ts`**

This makes it simple to update all your images in one place!

---

**Good luck with your Beacon of Hope website! 🌟**
