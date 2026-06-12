import { Link } from 'react-router-dom';
import { PATHS } from '../utils/routes';

export default function Login() {
  return (
    <div className="bg-background text-on-background min-h-[100dvh] flex flex-col items-center overflow-x-hidden font-body-md w-full">
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 h-20 backdrop-blur-xl border-b border-outline-variant/20 bg-surface/80">
        <Link to={PATHS.HOME} className="flex items-center gap-sm hover:opacity-70 transition-opacity bg-surface-container-highest p-2 rounded-full">
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md tracking-tight text-primary font-bold">CustomWear</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-grow w-full max-w-md px-6 pt-32 pb-12 flex flex-col mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-display-xl text-[32px] leading-tight text-on-surface mb-2 font-bold">Welcome back</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Sign in to continue your creative journey.</p>
        </div>

        <div className="w-full h-48 rounded-xl overflow-hidden mb-xl bg-surface-container-low border border-outline-variant/20 hidden md:block">
          <img
            className="w-full h-full object-cover grayscale opacity-80"
            alt="Minimalist fashion studio"
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop"
          />
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface px-1 font-bold" htmlFor="loginId">Email or Mobile Number</label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-secondary transition-colors">person</span>
              <input
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-outline-variant/50 bg-surface font-body-md text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all shadow-sm"
                id="loginId"
                placeholder="name@studio.com or +1 555-0000"
                type="text"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="password">Password</label>
              <Link className="font-label-sm text-label-sm text-secondary hover:underline transition-all" to="#">Forgot Password?</Link>
            </div>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 group-focus-within:text-secondary transition-colors">lock</span>
              <input
                className="w-full h-14 pl-12 pr-12 rounded-xl border border-outline-variant/50 bg-surface font-body-md text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all shadow-sm"
                id="password"
                placeholder="••••••••"
                type="password"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-primary transition-colors" type="button">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>

          <button className="w-full h-14 mt-2 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-secondary active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-secondary/30" type="submit">
            Login to Account
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </form>

        <div className="flex items-center my-8 gap-4">
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
          <span className="font-label-sm text-label-sm text-on-surface-variant/50 uppercase tracking-widest font-bold">Or continue with</span>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>

        <div className="flex gap-4 mb-10">
          <button className="flex-1 h-14 rounded-xl border border-outline-variant/50 bg-surface flex items-center justify-center hover:bg-surface-variant transition-colors active:scale-95 shadow-sm group">
            <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.85-2.22.83-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="font-label-md text-label-md font-bold text-on-surface">Google</span>
          </button>
          <button className="flex-1 h-14 rounded-xl border border-outline-variant/50 bg-surface flex items-center justify-center hover:bg-surface-variant transition-colors active:scale-95 shadow-sm group">
            <svg className="w-5 h-5 mr-2 text-on-surface group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.92 3.78 2.29-3.32 1.83-2.77 6.11.45 7.42-.71 1.63-1.68 3.23-2.88 4.3zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor" />
            </svg>
            <span className="font-label-md text-label-md font-bold text-on-surface">Apple</span>
          </button>
        </div>

        <div className="mt-auto pt-lg text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Don't have an account?
            <Link className="text-secondary font-bold hover:underline transition-all decoration-2 underline-offset-4 ml-2" to={PATHS.SIGNUP}>Register</Link>
          </p>
        </div>
      </main>
    </div>
  );
}