# Pip app activities

Seven homepage illustrations created with the **built-in Imagegen tool**, using `public/brand/pip/hello.png` as the character reference and `public/brand/pip/macbook.png` as the style-with-props reference. Each asset is an alpha-transparent PNG; the original brand poses remain unchanged.

## Placement and motion

Desktop poses sit beside the lower-left edge of the phone, clear of the copy, controls and floating product details. Each pose rises into its own chapter and fades out before the next begins. Reveal positions derive from scroll geometry, so reverse scrolling and anchor jumps use the same state. On mobile, each complete pose appears in normal flow beneath its phone.

Each visible pose repeats a 4.8-second CSS animation. A shared pause/play control sits in the desktop app rail and beneath each mobile pose; pausing applies to every character. Guiding Light has a thoughtful nod, warm lantern shimmer and writing marks; BrighterStart stretches above a fixed duvet with alarm accents; Daily Proverb sways with rising tea steam; LockIN jogs with brief motion lines; Count21 lifts a heart card; Hoops Slate dribbles a separately layered ball; PassPhoto leans into a camera pose with a soft shutter sparkle. The bed, ball and camera layers reuse clipped regions of their original optimized image. Small accent artwork is inline SVG. No new generated assets or animation dependency is needed.

Each PipActivity owns its IntersectionObserver, so remounted artwork and live preview updates cannot leave visibility tracking attached to stale elements. Offscreen poses stop, and background tabs pause the animation. Reduced-motion mode disables all movement and accents, restoring the complete original images. Decorative artwork remains hidden from assistive technology and does not intercept clicks.

## Assets and exact prompts

### guiding-light

Saved asset: [journal.png](../public/brand/pip/activities/journal.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip is thoughtfully writing in an open cream-paper journal with a small pencil, seated at a tiny low wooden writing table. A small brass camping lantern sits beside the journal and casts a cozy golden pool of light over the pages and Pip's hands and face. Make the lantern's warm light visually evident with a restrained soft glow close to the lantern, preserving alpha transparency around the group. Eyes looking gently down at the journal; the face, stem and leaf remain visible. Warm parchment and gold props. No extra books, furniture or props.
```

### brighterstart

Saved asset: [waking.png](../public/brand/pip/activities/waking.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip is waking up IN a small cozy bed, sitting upright against one cream pillow, with the lower body under a soft peach duvet. Both little rounded arms stretch upward and outward in a morning stretch; the face has a cheerful sleepy smile with happy closed curved eyes. Curved stem and blue leaf fully visible. The bed has a simple low light-wood frame. A little round sunrise-orange alarm clock sits by the side of the bed without a bedside table. No lettering, numerals, bedroom background or additional furnishings.
```

### daily-proverb

Saved asset: [reading.png](../public/brand/pip/activities/reading.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip is sitting comfortably with tiny feet in front, quietly reading a small open sage-green book held in its rounded hands. A little cream cup of tea rests next to Pip, with a single subtle curl of steam. Content focused expression, open oval eyes looking down toward the book. Full face, frost, stem and leaf visible. Only the character, book and tea; no chair, table or extra props.
```

### lockin

Saved asset: [running.png](../public/brand/pip/activities/running.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip is jogging in a gentle side-facing three-quarter pose, one small foot forward and the other back, with rounded arms bent in a natural running gesture. A small dark fitness watch with a bright lime-green display sits on the near wrist, visibly recognizable but no readable text. Cheerful focused open-eye expression. Keep the original grape body and frosted crown; no clothes, shoes, sweatband, road or scenery. Entire body including stem, leaf, watch and feet visible.
```

### count21

Saved asset: [cards.png](../public/brand/pip/activities/cards.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip sits with a focused little smile, holding a fan of three cream playing cards in its small rounded hands. The fan is angled toward the viewer and has simple black spade and red heart/diamond suit symbols, with no letters or numbers. Card size modest enough for Pip's whole face and crown to remain visible. Tiny feet in front. No money, chips, casino table or extra props. Cream and warm amber details.
```

### hoops-connect

Saved asset: [basketball.png](../public/brand/pip/activities/basketball.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip is playing basketball, leaning forward slightly in a playful athletic pose while dribbling one warm orange basketball with clear dark seam lines. One rounded arm reaches toward the ball low beside Pip, the other balances, and the little feet are offset as if stepping forward. The full face, frosted crown, stem and blue leaf are visible. Only one ball, placed near but not touching the hand so the action is clear. No hoop, court, clothing, extra limbs or speed lines.
```

### passphoto

Saved asset: [portrait.png](../public/brand/pip/activities/portrait.png)

```text
Use case: illustration-story.
Asset type: one transparent web illustration for a Frozen Grape app chapter.
Reference images: Image 1 is the approved Soft Pip character identity; Image 2 shows the exact established 2D style with a prop. Preserve the SAME single rounded purple grape, printed-paper grain, light frost on the upper-left crown, curved purple stem, icy-blue leaf with white veins, simple dark oval eyes, tiny smile, stubby rounded arms and feet. Keep the same colors and flat, soft illustration style. No realistic 3D, no shiny material, no thick outlines, no human fingers or extra limbs.
Composition: a single compact scene showing the full character and only the props described below. Three-quarter view, friendly and calm, clearly readable at 180px. A square canvas with the grouping filling about 88% of the canvas, all edges uncropped. Genuine alpha-transparent background. No backdrop, room, floor rectangle, framing card, text, caption or watermark. Keep the background around every object completely transparent. The finished asset should look like part of the same series as the references.
Activity: Pip is posing politely for a small icy-blue and charcoal camera on a short tripod beside it. Pip faces mostly toward the viewer with a calm smile and oval eyes, tiny rounded arms resting at its sides. The camera is angled toward Pip in a clear three-quarter view so the lens and the act of taking a portrait are understandable. The tripod is no taller than Pip's body, and the entire character and camera are visible. No photo backdrop, flash burst, border, document, text or extra props.
```
