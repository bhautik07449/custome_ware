
interface TShirtSVGProps {
  color: string;
  style?: string;
  className?: string;
  /** When true, skips the drop-shadow filter (safe for multiple instances on screen) */
  thumbnail?: boolean;
}

// ─── All shirt silhouette paths (ViewBox 0 0 500 560) ────────────────────────

const PATHS: Record<string, { body: string; collar: string }> = {

  /** 1. CLASSIC CREW — standard round neck, regular fit */
  'Classic Crew': {
    body: `M 178 78
      C 158 66,128 54,96 54
      C 64 54,24 84,10 148
      L 8 192
      C 18 210,60 228,114 226
      C 114 252,110 290,106 330
      C 100 400,95 480,92 556
      L 408 556
      C 405 480,400 400,394 330
      C 390 290,386 252,386 226
      C 440 228,482 210,492 192
      L 490 148
      C 476 84,436 54,404 54
      C 372 54,342 66,322 78
      C 312 138,284 154,250 156
      C 216 154,188 138,178 78 Z`,
    collar: `M 178 78 C 188 138,216 154,250 156 C 284 154,312 138,322 78`,
  },

  /** 2. V-NECK — deep V neckline */
  'V-Neck': {
    body: `M 178 78
      C 158 66,128 54,96 54
      C 64 54,24 84,10 148
      L 8 192
      C 18 210,60 228,114 226
      C 114 252,110 290,106 330
      C 100 400,95 480,92 556
      L 408 556
      C 405 480,400 400,394 330
      C 390 290,386 252,386 226
      C 440 228,482 210,492 192
      L 490 148
      C 476 84,436 54,404 54
      C 372 54,342 66,322 78
      C 308 106,278 182,250 210
      C 222 182,192 106,178 78 Z`,
    collar: `M 178 78 C 192 106,222 182,250 210 C 278 182,308 106,322 78`,
  },

  /** 3. LONG SLEEVE — full-length sleeves */
  'Long Sleeve': {
    body: `M 178 78
      C 158 66,128 54,96 54
      C 64 54,24 84,10 148
      C 4 210,0 310,0 420
      L 0 492
      C 2 522,18 544,46 548
      L 88 548
      C 96 516,100 474,104 430
      C 108 374,110 312,110 252
      C 110 264,108 300,106 340
      C 100 406,95 484,92 556
      L 408 556
      C 405 484,400 406,394 340
      C 392 300,390 264,390 252
      C 390 312,392 374,396 430
      C 400 474,404 516,412 548
      L 454 548
      C 482 544,498 522,500 492
      L 500 420
      C 500 310,496 210,490 148
      C 476 84,436 54,404 54
      C 372 54,342 66,322 78
      C 312 138,284 154,250 156
      C 216 154,188 138,178 78 Z`,
    collar: `M 178 78 C 188 138,216 154,250 156 C 284 154,312 138,322 78`,
  },

  /** 4. OVERSIZED — drop shoulder, boxy fit */
  'Oversized': {
    body: `M 168 70
      C 146 56,110 42,74 42
      C 38 42,2 78,0 150
      L 0 200
      C 12 220,56 244,118 240
      C 118 268,114 306,110 350
      C 104 428,98 490,96 556
      L 404 556
      C 402 490,396 428,390 350
      C 386 306,382 268,382 240
      C 444 244,488 220,500 200
      L 500 150
      C 498 78,462 42,426 42
      C 390 42,354 56,332 70
      C 320 134,292 156,250 160
      C 208 156,180 134,168 70 Z`,
    collar: `M 168 70 C 180 134,208 156,250 160 C 292 156,320 134,332 70`,
  },

  /** 5. POLO — polo collar + button placket */
  'Polo': {
    body: `M 196 82
      C 173 68,140 54,106 54
      C 72 52,28 84,12 148
      L 10 192
      C 20 210,62 228,116 226
      C 116 252,112 290,108 330
      C 102 400,97 480,94 556
      L 406 556
      C 403 480,398 400,392 330
      C 388 290,384 252,384 226
      C 438 228,480 210,490 192
      L 488 148
      C 472 84,428 52,394 54
      C 360 56,328 68,304 82
      C 297 108,278 128,250 134
      C 222 128,203 108,196 82 Z`,
    collar: `M 196 82 C 203 108,222 128,250 134 C 278 128,297 108,304 82`,
  },

  /** 6. TANK TOP — sleeveless, wide armholes */
  'Tank Top': {
    body: `M 162 60
      C 140 50,112 46,86 50
      C 60 54,44 70,40 94
      L 36 186
      C 38 218,52 252,74 272
      C 108 290,156 294,182 288
      C 172 334,162 398,155 454
      C 150 496,148 526,146 556
      L 354 556
      C 352 526,350 496,345 454
      C 338 398,328 334,318 288
      C 344 294,392 290,426 272
      C 448 252,462 218,464 186
      L 460 94
      C 456 70,440 54,414 50
      C 388 46,360 50,338 60
      C 326 92,296 136,250 148
      C 204 136,174 92,162 60 Z`,
    collar: `M 162 60 C 174 92,204 136,250 148 C 296 136,326 92,338 60`,
  },

  // Backward-compat alias
  'Heavyweight': {
    body: `M 168 70 C 146 56,110 42,74 42 C 38 42,2 78,0 150 L 0 200 C 12 220,56 244,118 240 C 118 268,114 306,110 350 C 104 428,98 490,96 556 L 404 556 C 402 490,396 428,390 350 C 386 306,382 268,382 240 C 444 244,488 220,500 200 L 500 150 C 498 78,462 42,426 42 C 390 42,354 56,332 70 C 320 134,292 156,250 160 C 208 156,180 134,168 70 Z`,
    collar: `M 168 70 C 180 134,208 156,250 160 C 292 156,320 134,332 70`,
  },
};

// ─── Design area fractions per style ─────────────────────────────────────────
// Returns printable area as fractions of the 500×560 viewBox.

export function getDesignAreaFraction(style: string = 'Classic Crew') {
  if (style === 'Tank Top')   return { left: 0.31, top: 0.50, width: 0.38, height: 0.32 };
  if (style === 'Long Sleeve') return { left: 0.30, top: 0.30, width: 0.40, height: 0.36 };
  if (style === 'Oversized')   return { left: 0.28, top: 0.30, width: 0.44, height: 0.38 };
  if (style === 'Heavyweight') return { left: 0.28, top: 0.30, width: 0.44, height: 0.38 };
  return { left: 0.30, top: 0.30, width: 0.40, height: 0.38 }; // Classic, V-Neck, Polo
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TShirtSVG({ color, style = 'Classic Crew', className = '', thumbnail = false }: TShirtSVGProps) {
  const paths   = PATHS[style] ?? PATHS['Classic Crew'];
  const body    = paths.body;
  const collar  = paths.collar;
  const isPolo  = style === 'Polo';
  const isTank  = style === 'Tank Top';

  // Stable uid per style (not per instance — filters used inside same SVG are OK)
  const uid = `tshirt-${style.replace(/\s+/g, '')}`;

  return (
    <svg
      viewBox="0 0 500 560"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-label={`${style} T-Shirt`}
    >
      <defs>
        {/* Drop shadow — skipped in thumbnail mode to avoid multi-instance ID clash */}
        {!thumbnail && (
          <filter id={`${uid}-drop`} x="-12%" y="-6%" width="124%" height="124%">
            <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="rgba(0,0,0,0.32)" />
          </filter>
        )}

        {/* Body shading gradient */}
        <linearGradient id={`${uid}-body`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.24)" />
          <stop offset="25%"  stopColor="rgba(255,255,255,0.10)" />
          <stop offset="65%"  stopColor="rgba(0,0,0,0.03)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.20)" />
        </linearGradient>

        {/* Left sleeve / arm highlight */}
        <linearGradient id={`${uid}-sl`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.06)" />
        </linearGradient>

        {/* Right sleeve shadow */}
        <linearGradient id={`${uid}-sr`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
        </linearGradient>

        {/* Collar depth */}
        <radialGradient id={`${uid}-cdepth`} cx="50%" cy="20%" r="65%">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.42)" />
          <stop offset="60%"  stopColor="rgba(0,0,0,0.14)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        {/* Specular highlight */}
        <radialGradient id={`${uid}-spec`} cx="34%" cy="32%" r="42%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Edge vignette */}
        <radialGradient id={`${uid}-edge`} cx="50%" cy="50%" r="56%">
          <stop offset="0%"   stopColor="rgba(0,0,0,0)" />
          <stop offset="80%"  stopColor="rgba(0,0,0,0.04)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.16)" />
        </radialGradient>

        {/* Fabric weave */}
        <pattern id={`${uid}-weave`} x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="none"/>
          <line x1="0" y1="0" x2="4" y2="4" stroke="rgba(0,0,0,0.015)" strokeWidth="0.6"/>
          <line x1="4" y1="0" x2="0" y2="4" stroke="rgba(0,0,0,0.015)" strokeWidth="0.6"/>
        </pattern>

        {/* Clip */}
        <clipPath id={`${uid}-clip`}>
          <path d={body}/>
        </clipPath>
      </defs>

      {/* ── 1. Base fill + shadow ── */}
      <path
        d={body}
        fill={color}
        filter={!thumbnail ? `url(#${uid}-drop)` : undefined}
        style={{ transition: 'fill 0.3s ease' }}
      />

      {/* ── 2. Fabric weave ── */}
      <path d={body} fill={`url(#${uid}-weave)`} style={{ pointerEvents: 'none' }}/>

      {/* ── 3. Body shading ── */}
      <path d={body} fill={`url(#${uid}-body)`} style={{ pointerEvents: 'none' }}/>

      {/* ── 4. Specular highlight ── */}
      <path d={body} fill={`url(#${uid}-spec)`} style={{ pointerEvents: 'none' }}/>

      {/* ── 5. Left sleeve / strap highlight ── */}
      {!isTank ? (
        <path
          d={style === 'Oversized' || style === 'Heavyweight'
            ? 'M 74 42 C 38 42,2 78,0 150 L 0 200 C 12 220,56 244,118 240 L 110 350 C 104 290,98 240,112 214 C 58 208,12 188,4 164 L 6 140 C 18 68,56 44,74 42 Z'
            : style === 'Long Sleeve'
            ? 'M 96 54 C 64 54,24 84,10 148 C 4 210,0 310,0 420 L 0 492 C 2 522,18 544,46 548 L 88 548 C 96 516,100 474,104 430 C 108 374,110 312,110 252 C 60 244,16 214,10 186 L 12 140 C 26 74,62 54,96 54 Z'
            : 'M 96 54 C 64 54,24 84,10 148 L 8 192 C 18 210,60 228,114 226 L 106 330 C 100 278,98 244,108 216 C 58 210,16 192,12 172 L 14 140 C 26 76,62 56,96 54 Z'
          }
          fill={`url(#${uid}-sl)`}
          style={{ pointerEvents: 'none' }}
        />
      ) : (
        /* Tank top — left strap highlight */
        <path
          d="M 86 50 C 60 54,44 70,40 94 L 36 186 C 38 218,52 252,74 272 C 108 290,156 294,182 288 L 178 320 C 150 308,102 296,68 270 C 44 248,32 212,32 180 L 36 88 C 42 62,60 50,86 50 Z"
          fill={`url(#${uid}-sl)`}
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* ── 6. Right sleeve / strap shadow ── */}
      {!isTank ? (
        <path
          d={style === 'Oversized' || style === 'Heavyweight'
            ? 'M 426 42 C 462 42,498 78,500 150 L 500 200 C 488 220,444 244,382 240 L 390 350 C 396 290,402 240,388 214 C 442 208,488 188,496 164 L 494 140 C 482 68,444 44,426 42 Z'
            : style === 'Long Sleeve'
            ? 'M 404 54 C 436 54,476 84,490 148 C 496 210,500 310,500 420 L 500 492 C 498 522,482 544,454 548 L 412 548 C 404 516,400 474,396 430 C 392 374,390 312,390 252 C 440 244,484 214,490 186 L 488 140 C 474 74,438 54,404 54 Z'
            : 'M 404 54 C 436 54,476 84,490 148 L 492 192 C 482 210,440 228,386 226 L 394 330 C 400 278,402 244,392 216 C 442 210,484 192,488 172 L 486 140 C 474 76,438 56,404 54 Z'
          }
          fill={`url(#${uid}-sr)`}
          style={{ pointerEvents: 'none' }}
        />
      ) : (
        /* Tank top — right strap shadow */
        <path
          d="M 414 50 C 440 54,456 70,460 94 L 464 186 C 462 218,448 252,426 272 C 392 290,344 294,318 288 L 322 320 C 350 308,398 296,432 270 C 456 248,468 212,468 180 L 464 88 C 458 62,440 50,414 50 Z"
          fill={`url(#${uid}-sr)`}
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* ── 7. Fabric wrinkles (clipped to body) ── */}
      <g clipPath={`url(#${uid}-clip)`} style={{ pointerEvents: 'none' }}>
        {!isTank && (
          <>
            {/* Left armhole fold */}
            <path
              d={style === 'Oversized' || style === 'Heavyweight'
                ? 'M 118 240 C 148 274,155 318,142 360'
                : 'M 114 226 C 144 260,151 304,138 346'
              }
              fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="3.5" strokeLinecap="round"
            />
            <path
              d={style === 'Oversized' || style === 'Heavyweight'
                ? 'M 105 258 C 130 292,132 334,120 374'
                : 'M 101 244 C 126 278,128 320,116 360'
              }
              fill="none" stroke="rgba(0,0,0,0.038)" strokeWidth="2.5" strokeLinecap="round"
            />
            {/* Right armhole fold */}
            <path
              d={style === 'Oversized' || style === 'Heavyweight'
                ? 'M 382 240 C 352 274,345 318,358 360'
                : 'M 386 226 C 356 260,349 304,362 346'
              }
              fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="3.5" strokeLinecap="round"
            />
            <path
              d={style === 'Oversized' || style === 'Heavyweight'
                ? 'M 395 258 C 370 292,368 334,380 374'
                : 'M 399 244 C 374 278,372 320,384 360'
              }
              fill="none" stroke="rgba(0,0,0,0.038)" strokeWidth="2.5" strokeLinecap="round"
            />
          </>
        )}
        {/* Center crease */}
        <path d="M 249 230 C 251 340,251 440,250 540" fill="none" stroke="rgba(0,0,0,0.024)" strokeWidth="2" strokeLinecap="round"/>
        {/* Chest tension line */}
        <path d="M 162 256 C 210 262,290 262,338 256" fill="none" stroke="rgba(0,0,0,0.030)" strokeWidth="2" strokeLinecap="round"/>
        {/* Lower chest fold */}
        <path d="M 150 346 C 200 352,300 352,350 346" fill="none" stroke="rgba(0,0,0,0.022)" strokeWidth="1.8" strokeLinecap="round"/>
        {/* Long sleeve extra wrinkles */}
        {style === 'Long Sleeve' && (
          <>
            <path d="M 94 380 C 96 430,98 478,98 520" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 406 380 C 404 430,402 478,402 520" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="2" strokeLinecap="round"/>
          </>
        )}
      </g>

      {/* ── 8. Collar depth ── */}
      <ellipse
        cx="250"
        cy={style === 'V-Neck' ? '120' : style === 'Tank Top' ? '90' : style === 'Polo' ? '96' : '106'}
        rx={style === 'Oversized' || style === 'Heavyweight' ? '92' : style === 'Tank Top' ? '94' : style === 'Polo' ? '62' : '86'}
        ry={style === 'Oversized' || style === 'Heavyweight' ? '60' : style === 'V-Neck' ? '80' : style === 'Tank Top' ? '56' : '54'}
        fill={`url(#${uid}-cdepth)`}
        clipPath={`url(#${uid}-clip)`}
        style={{ pointerEvents: 'none' }}
      />

      {/* ── 9. Edge vignette ── */}
      <path d={body} fill={`url(#${uid}-edge)`} style={{ pointerEvents: 'none' }}/>

      {/* ─────── POLO-SPECIFIC: collar flaps + placket ─────── */}
      {isPolo && (
        <>
          {/* Left flap */}
          <path
            d="M 250 134 C 240 132,215 122,200 104 C 194 90,193 78,196 68 C 192 76,188 90,188 104 C 188 120,200 136,218 142 C 232 146,246 144,250 142 Z"
            fill={color}
            style={{ filter: 'brightness(0.84)', transition: 'fill 0.3s ease' }}
            stroke="rgba(0,0,0,0.16)" strokeWidth="1.2"
          />
          {/* Right flap */}
          <path
            d="M 250 134 C 260 132,285 122,300 104 C 306 90,307 78,304 68 C 308 76,312 90,312 104 C 312 120,300 136,282 142 C 268 146,254 144,250 142 Z"
            fill={color}
            style={{ filter: 'brightness(0.84)', transition: 'fill 0.3s ease' }}
            stroke="rgba(0,0,0,0.16)" strokeWidth="1.2"
          />
          {/* Button placket */}
          <rect x="244" y="134" width="12" height="88" rx="3"
            fill={color}
            style={{ filter: 'brightness(0.88)', transition: 'fill 0.3s ease' }}
            stroke="rgba(0,0,0,0.14)" strokeWidth="1"
          />
          {/* Buttons */}
          {[152, 174, 196, 218].map(cy => (
            <g key={cy}>
              <circle cx="250" cy={cy} r="5" fill="rgba(255,255,255,0.5)" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2"/>
              <circle cx="250" cy={cy} r="1.8" fill="rgba(0,0,0,0.25)"/>
            </g>
          ))}
          {/* Flap center seam */}
          <line x1="250" y1="68" x2="250" y2="134" stroke="rgba(0,0,0,0.10)" strokeWidth="1" strokeDasharray="3,2"/>
        </>
      )}

      {/* ── 10. Collar rib band ── */}
      <path
        d={collar}
        fill="none"
        stroke="rgba(0,0,0,0.26)"
        strokeWidth={style === 'V-Neck' ? '5' : '7'}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pointerEvents: 'none' }}
      />
      <path
        d={collar}
        fill="none"
        stroke={color}
        strokeWidth={style === 'V-Neck' ? '3' : '4.5'}
        strokeLinecap="round"
        style={{ filter: 'brightness(0.82)', pointerEvents: 'none', transition: 'stroke 0.3s ease' }}
      />
      <path
        d={collar}
        fill="none"
        stroke="rgba(255,255,255,0.20)"
        strokeWidth="1.8"
        strokeLinecap="round"
        style={{ pointerEvents: 'none' }}
      />

      {/* ── 11. Sleeve cuff / armhole hem ── */}
      {!isTank ? (
        <>
          {/* Left sleeve cuff */}
          <path
            d={style === 'Long Sleeve'
              ? 'M 0 492 C 2 522,18 544,46 548 L 88 548'
              : style === 'Oversized' || style === 'Heavyweight'
              ? 'M 0 200 C 12 220,56 244,118 240'
              : 'M 8 192 C 18 210,60 228,114 226'
            }
            fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="4.5" strokeLinecap="round"
            style={{ pointerEvents: 'none' }}
          />
          {/* Right sleeve cuff */}
          <path
            d={style === 'Long Sleeve'
              ? 'M 500 492 C 498 522,482 544,454 548 L 412 548'
              : style === 'Oversized' || style === 'Heavyweight'
              ? 'M 500 200 C 488 220,444 244,382 240'
              : 'M 492 192 C 482 210,440 228,386 226'
            }
            fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="4.5" strokeLinecap="round"
            style={{ pointerEvents: 'none' }}
          />
          {/* Left cuff highlight */}
          <path
            d={style === 'Long Sleeve'
              ? 'M 0 492 C 2 522,18 544,46 548 L 88 548'
              : style === 'Oversized' || style === 'Heavyweight'
              ? 'M 0 200 C 12 220,56 244,118 240'
              : 'M 8 192 C 18 210,60 228,114 226'
            }
            fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round"
            style={{ pointerEvents: 'none' }}
          />
          {/* Right cuff highlight */}
          <path
            d={style === 'Long Sleeve'
              ? 'M 500 492 C 498 522,482 544,454 548 L 412 548'
              : style === 'Oversized' || style === 'Heavyweight'
              ? 'M 500 200 C 488 220,444 244,382 240'
              : 'M 492 192 C 482 210,440 228,386 226'
            }
            fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"
            style={{ pointerEvents: 'none' }}
          />
        </>
      ) : (
        /* Tank top — armhole edges */
        <>
          <path d="M 36 186 C 38 218,52 252,74 272 C 108 290,156 294,182 288"
            fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="4.5" strokeLinecap="round"
            style={{ pointerEvents: 'none' }}/>
          <path d="M 464 186 C 462 218,448 252,426 272 C 392 290,344 294,318 288"
            fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="4.5" strokeLinecap="round"
            style={{ pointerEvents: 'none' }}/>
        </>
      )}

      {/* ── 12. Shoulder seam stitching ── */}
      {!isTank && (
        <>
          <path
            d={style === 'Oversized' || style === 'Heavyweight'
              ? 'M 118 240 C 104 190,100 136,168 70'
              : style === 'Long Sleeve'
              ? 'M 110 252 C 96 200,90 140,178 78'
              : 'M 114 226 C 100 178,96 126,178 78'
            }
            fill="none" stroke="rgba(0,0,0,0.11)" strokeWidth="1.4"
            strokeLinecap="round" strokeDasharray="5,3.5"
            style={{ pointerEvents: 'none' }}
          />
          <path
            d={style === 'Oversized' || style === 'Heavyweight'
              ? 'M 382 240 C 396 190,400 136,332 70'
              : style === 'Long Sleeve'
              ? 'M 390 252 C 404 200,410 140,322 78'
              : 'M 386 226 C 400 178,404 126,322 78'
            }
            fill="none" stroke="rgba(0,0,0,0.11)" strokeWidth="1.4"
            strokeLinecap="round" strokeDasharray="5,3.5"
            style={{ pointerEvents: 'none' }}
          />
        </>
      )}

      {/* ── 13. Side seam stitching ── */}
      <path
        d={style === 'Oversized' || style === 'Heavyweight'
          ? 'M 118 240 C 112 360,104 460,96 556'
          : style === 'Tank Top'
          ? 'M 182 288 C 170 360,156 456,146 556'
          : style === 'Long Sleeve'
          ? 'M 110 252 C 106 350,98 454,92 556'
          : 'M 114 226 C 108 346,100 454,92 556'
        }
        fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="1.2"
        strokeLinecap="round" strokeDasharray="5,4"
        style={{ pointerEvents: 'none' }}
      />
      <path
        d={style === 'Oversized' || style === 'Heavyweight'
          ? 'M 382 240 C 388 360,396 460,404 556'
          : style === 'Tank Top'
          ? 'M 318 288 C 330 360,344 456,354 556'
          : style === 'Long Sleeve'
          ? 'M 390 252 C 394 350,402 454,408 556'
          : 'M 386 226 C 392 346,400 454,408 556'
        }
        fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="1.2"
        strokeLinecap="round" strokeDasharray="5,4"
        style={{ pointerEvents: 'none' }}
      />

      {/* ── 14. Bottom hem ── */}
      <path
        d={style === 'Oversized' || style === 'Heavyweight' ? 'M 96 553 L 404 553' : style === 'Tank Top' ? 'M 146 553 L 354 553' : 'M 92 553 L 408 553'}
        fill="none" stroke="rgba(0,0,0,0.16)" strokeWidth="4" strokeLinecap="round"
        style={{ pointerEvents: 'none' }}
      />
      <path
        d={style === 'Oversized' || style === 'Heavyweight' ? 'M 96 550 L 404 550' : style === 'Tank Top' ? 'M 146 550 L 354 550' : 'M 92 550 L 408 550'}
        fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round"
        style={{ pointerEvents: 'none' }}
      />

      {/* ── 15. Outline ── */}
      <path
        d={body}
        fill="none"
        stroke="rgba(0,0,0,0.22)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        style={{ pointerEvents: 'none' }}
      />
    </svg>
  );
}

// ─── Export helpers for Canvas 2D download ───────────────────────────────────

export function getTShirtPath(style: string = 'Classic Crew'): string {
  return (PATHS[style] ?? PATHS['Classic Crew']).body;
}

export function getCollarPath(style: string = 'Classic Crew'): string {
  return (PATHS[style] ?? PATHS['Classic Crew']).collar;
}
