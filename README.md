# 🌟 Beacon of Hope - Charity Website

## Welcome!

This is a **world-class charity website** built specifically for Beacon of Hope, a legally registered nonprofit organization in Cameroon. The website is fully optimized for local and international donors, with special features for Cameroon including Mobile Money integration.

---

## 🚀 Quick Start

### **Want to add your own images?** 

👉 **Start here:** [QUICK_START_GUIDE.md](/QUICK_START_GUIDE.md)

This will get you up and running in **5 minutes**!

---

## 📚 Documentation

| Document | Description | When to Use |
|----------|-------------|-------------|
| **[QUICK_START_GUIDE.md](/QUICK_START_GUIDE.md)** | Fast overview + immediate next steps | **Start here!** First time setup |
| **[IMAGE_SETUP_INSTRUCTIONS.md](/IMAGE_SETUP_INSTRUCTIONS.md)** | Detailed image setup guide | Adding/managing your photos |
| **[IMAGE_CHECKLIST.md](/IMAGE_CHECKLIST.md)** | Step-by-step checklist | Tracking your progress |
| **[TROUBLESHOOTING.md](/TROUBLESHOOTING.md)** | Common issues & solutions | When something isn't working |
| **[IMPLEMENTATION_SUMMARY.md](/IMPLEMENTATION_SUMMARY.md)** | Technical overview | Understanding how it works |

---

## ✨ Key Features

### 🇨🇲 **Optimized for Cameroon**
- **Mobile Money Integration** (MTN MoMo & Orange Money)
- WhatsApp confirmation for donations
- Local currency (XAF) prominently featured
- Cameroon flag colors (green, red, yellow)
- Cultural authenticity throughout

### 💰 **Donation Features**
- International donation section
- Mobile Money donation section (critical for Cameroon!)
- Donation impact visualizer (show what each amount does)
- Multiple payment method support
- Trust indicators throughout

### 📱 **Communication**
- Floating WhatsApp button (24/7 availability)
- Newsletter subscription
- Volunteer signup form
- Contact form
- Social media integration

### 🎨 **Professional Design**
- World-class NGO standards
- Mobile-responsive
- Smooth animations
- Emotional storytelling
- Conversion-optimized
- Trust-building elements

### 🖼️ **Image Management**
- **Use your own photos** (local storage)
- Centralized configuration
- Easy updates (just swap files!)
- Automatic placeholders if images missing
- Development tool to check image status

---

## 📁 Project Structure

```
beacon-of-hope/
├── public/
│   └── images/              ← ADD YOUR IMAGES HERE
│       ├── hero/
│       ├── gallery/
│       ├── cta/
│       ├── team/
│       └── testimonials/
│
├── src/
│   └── app/
│       ├── components/      ← All website sections
│       └── config/
│           └── imageConfig.ts  ← MANAGE IMAGES HERE
│
└── Documentation/
    ├── QUICK_START_GUIDE.md
    ├── IMAGE_SETUP_INSTRUCTIONS.md
    ├── IMAGE_CHECKLIST.md
    ├── TROUBLESHOOTING.md
    └── IMPLEMENTATION_SUMMARY.md
```

---

## 🎯 Website Sections

1. **Hero** - Main banner with call-to-action
2. **Trust Badges** - Legal verification, transparency
3. **About** - Organization story and mission
4. **Impact Statistics** - Lives changed, programs, reach
5. **Programs** - Services offered (education, healthcare, etc.)
6. **Photo Gallery** - 6 photos of work in action
7. **CTA Banner** - Emotional "Change a Life" section
8. **Donation Impact** - Show what each amount achieves
9. **International Donations** - For overseas donors
10. **Mobile Money** - MTN MoMo/Orange Money (Cameroon)
11. **Get Involved** - Ways to support
12. **Volunteer Signup** - Form with all fields
13. **Testimonials** - 3 success stories
14. **Team** - Leadership and staff
15. **Partners** - Organizations and sponsors
16. **Newsletter** - Email subscription
17. **Contact** - Contact form and info
18. **Footer** - Enhanced with Cameroon identity

**Plus:**
- Sticky navigation bar
- Floating WhatsApp button
- Image status checker (development tool)

---

## 🔧 Setup Instructions

### 1️⃣ **Add Your Images** (15 minutes)

You need **14 total images**:
- 1 hero background
- 6 gallery photos
- 1 CTA banner
- 3 team photos
- 3 testimonial photos

**See:** [IMAGE_SETUP_INSTRUCTIONS.md](/IMAGE_SETUP_INSTRUCTIONS.md)

### 2️⃣ **Customize Content** (10 minutes)

Edit `/src/app/config/imageConfig.ts`:
- Team member names, roles, emails
- Testimonial quotes
- Gallery descriptions

### 3️⃣ **Update Contact Info** (5 minutes)

Search and replace throughout:
- Phone: `+237 652 572 439`
- Email addresses
- Office locations

### 4️⃣ **Test Everything** (10 minutes)

- [ ] All images load
- [ ] Navigation works
- [ ] Forms submit (currently show alert)
- [ ] WhatsApp button works
- [ ] Mobile Money number copies
- [ ] Mobile responsive

### 5️⃣ **Launch Preparation**

- [ ] Remove `<ImageStatusChecker />` from App.tsx
- [ ] Final content proofread
- [ ] Mobile device testing
- [ ] Performance check

**Total Setup Time: ~45 minutes**

---

## 🖼️ Image Management System

### How It Works:

1. **All images** stored in `/public/images/`
2. **All paths** configured in `/src/app/config/imageConfig.ts`
3. **Components** automatically load from config
4. **Missing images** show professional placeholders

### Benefits:

- ✅ Use your actual charity photos
- ✅ Update by just replacing files
- ✅ No coding required for image changes
- ✅ Centralized management
- ✅ Graceful fallbacks

### Development Tool:

**Image Status Checker** (blue button, bottom-right):
- Shows which images are loaded ✅
- Shows which images are missing ❌
- Displays exact file paths
- Helps debug issues

---

## 🎨 Customization

### Change Colors:
- Edit `/src/styles/theme.css`
- Update component-specific colors in component files

### Change Text Content:
- Most text in individual component files
- Image-related text in `/src/app/config/imageConfig.ts`

### Add More Gallery Images:
1. Add image file to `/public/images/gallery/`
2. Add entry in `imageConfig.ts` gallery array

### Change Team Members:
- Edit team array in `/src/app/config/imageConfig.ts`
- Update name, role, description, email, image path

---

## 📱 Mobile Money Integration

**Critical for Cameroon donors!**

Features:
- MTN MoMo and Orange Money support
- Copy-to-clipboard phone number: **+237 652 572 439**
- WhatsApp confirmation flow
- 3-step donation guide
- Trust indicators
- Popular donation amounts

Located in: `/src/app/components/MobileMoneyDonation.tsx`

---

## 💬 WhatsApp Integration

Floating button features:
- 24/7 availability badge
- Pulse animation
- Phone: **+237 652 572 439**
- Links to `wa.me/237652572439`

Located in: `/src/app/components/WhatsAppButton.tsx`

---

## 🔍 Key Technologies

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Local Images** - Your photos

---

## 📊 Performance

- Mobile-optimized
- Fast loading
- Responsive design
- Progressive enhancement
- Graceful degradation

---

## ✅ Pre-Launch Checklist

- [ ] All 14 images added
- [ ] Team info updated
- [ ] Contact details updated
- [ ] Mobile Money number verified: +237 652 572 439
- [ ] WhatsApp number verified: +237 652 572 439
- [ ] All forms tested
- [ ] Mobile responsiveness checked
- [ ] Content proofread
- [ ] Image Status Checker removed
- [ ] Production deployment configured

---

## 🆘 Need Help?

1. **Quick answer:** Check [QUICK_START_GUIDE.md](/QUICK_START_GUIDE.md)
2. **Image issues:** Check [TROUBLESHOOTING.md](/TROUBLESHOOTING.md)
3. **Step-by-step:** Follow [IMAGE_CHECKLIST.md](/IMAGE_CHECKLIST.md)
4. **Technical details:** Read [IMPLEMENTATION_SUMMARY.md](/IMPLEMENTATION_SUMMARY.md)

---

## 🌟 About Beacon of Hope

**Mission:** Transforming lives and empowering communities across Cameroon through education, healthcare, and sustainable development programs.

**Locations:** Buea and Bamenda, with plans for nationwide expansion

**Status:** Legally registered nonprofit organization in Cameroon

**Contact:**
- Phone: +237 652 572 439
- WhatsApp: +237 652 572 439
- Email: info@beaconofhope.cm

**Website Features:**
- International donor support
- Mobile Money integration (MTN MoMo, Orange Money)
- Complete transparency
- Regular impact reporting
- Community-driven programs

---

## 📄 License

This website is built for Beacon of Hope charity organization.

---

## 🎉 You're Ready!

Your website is **fully configured and ready to launch** once you add your 14 images!

**Next Step:** Open [QUICK_START_GUIDE.md](/QUICK_START_GUIDE.md) and follow the simple instructions.

**Estimated time to launch:** 45 minutes

---

**Good luck transforming lives in Cameroon! 🇨🇲💚**

*Built with ❤️ for Beacon of Hope*
