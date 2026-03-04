import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Rajpreet Singh - Law Student at SMU';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '80px 100px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Avatar placeholder with online indicator */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#e5e5e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#404040',
            }}
          >
            RS
          </div>
          {/* Online indicator */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              border: '4px solid white',
              boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
            }}
          />
        </div>

        {/* Main heading - Line 1 */}
        <div
          style={{
            display: 'flex',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#0a0a0a',
            }}
          >
            Hi, I'm Rajpreet 👋
          </span>
        </div>

        {/* Main heading - Line 2 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '50px',
          }}
        >
          <span
            style={{
              fontSize: '48px',
              color: '#737373',
            }}
          >
            Law Student at
          </span>
          {/* SMU Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#ffffff',
              border: '2px solid #e5e5e5',
              borderRadius: '12px',
              padding: '8px 20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#0a0a0a',
              }}
            >
              SMU Law
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {/* Get in touch button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#0a0a0a',
              color: 'white',
              padding: '16px 28px',
              borderRadius: '10px',
              fontSize: '22px',
              fontWeight: '600',
            }}
          >
            Get in touch
          </div>

          {/* LinkedIn button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#0a66c2',
              color: 'white',
              padding: '16px 28px',
              borderRadius: '10px',
              fontSize: '22px',
              fontWeight: '600',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </div>

          {/* About me button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              color: '#0a0a0a',
              padding: '16px 28px',
              borderRadius: '12px',
              fontSize: '22px',
              fontWeight: '600',
              border: '2px solid #e5e5e5',
            }}
          >
            About me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
