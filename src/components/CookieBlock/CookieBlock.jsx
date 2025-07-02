import { useEffect } from 'react';
import classes from './CookieBlock.module.scss';
import Button from '@/components/Button/';
import { useCookieConsent } from './CookieHelper';

const CookieBlock = ({ text, lenis }) => {
   const { isAccepted, isVisible, accept } = useCookieConsent();

   useEffect(() => {
      if (!isVisible) {
         lenis.start();
         return;
      }

      lenis.scrollTo(0, {
         duration: 1,
         onComplete: () => lenis.stop()
      });
   }, [isVisible, lenis]);

   if (!isVisible) return null;

   return (
      <div className={`${classes.cookieBlock} ${isAccepted ? classes.accepted : ''}`}>
         <div className={classes.banner}>
            <p>{text.text}</p>
            <Button onClick={accept} text={text.button} color="dark" />
         </div>
      </div>
   );
};

export default CookieBlock;
