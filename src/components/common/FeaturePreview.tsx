import styles from './FeaturePreview.module.css';
import phone_ds from '../../assets/document_scanner/phone_ds.png';
import phone_ss from '../../assets/sign_stamp/phone_ss.png';
import phone_es from '../../assets/export_share/phone_es.png';
import phone_af from '../../assets/advanced_filters/phone_af.png';
import phone_bs from '../../assets/batch_scanning/phone_bs.png';
import sign from '../../assets/sign_stamp/sign.png';
import completed from '../../assets/sign_stamp/completed.png';
import { useContext } from 'react';
import { PageContext } from '../../store/page-context';
import file_preview from '../../assets/batch_scanning/file_preview.png';
import right_bar from '../../assets/advanced_filters/right_bar.png';
import left_bar from '../../assets/advanced_filters/left_bar.png';
import pdf_icon from '../../assets/export_share/pdf_icon.png';
import jpg_icon from '../../assets/export_share/jpg_icon.png';
import txt_icon from '../../assets/export_share/txt_icon.png';

export function FeaturePreview() {
  const pageNumberCtx = useContext(PageContext);
  return (
    <div className={styles.feature_preview}>
      <div className={styles.feature_preview__image_container}>
        {pageNumberCtx.pageNumber === 1 && (
          <img src={phone_ds} className={styles.feature_preview__phone_image} />
        )}
        {pageNumberCtx.pageNumber === 2 && (
          <>
            <img src={sign} className={styles.feature_preview__sign_image} />
            <img
              src={phone_ss}
              className={styles.feature_preview__phone_image}
            />
            <img
              src={completed}
              className={styles.feature_preview__completed_image}
            />
          </>
        )}
        {pageNumberCtx.pageNumber === 3 && (
          <>
            <img
              src={phone_bs}
              className={styles.feature_preview__phone_image}
            />
            <img
              src={file_preview}
              className={styles['feature_preview__file_preview--sm']}
            />
            <img
              src={file_preview}
              className={styles['feature_preview__file_preview--md']}
            />
            <img
              src={file_preview}
              className={styles['feature_preview__file_preview--lg']}
            />
          </>
        )}
        {pageNumberCtx.pageNumber === 4 && (
          <>
            <img
              src={phone_af}
              className={styles.feature_preview__phone_image}
            />
            <img src={left_bar} className={styles.feature_preview__left_bar} />
            <img
              src={right_bar}
              className={styles.feature_preview__right_bar}
            />
          </>
        )}
        {pageNumberCtx.pageNumber === 5 && (
          <>
            <img
              src={phone_es}
              className={styles.feature_preview__phone_image}
            />
            <img
              src={pdf_icon}
              className={`${styles.icon} ${styles.feature_preview__pdf_icon}`}
            />
            <img
              src={jpg_icon}
              className={`${styles.icon} ${styles.feature_preview__jpg_icon}`}
            />
            <img
              src={txt_icon}
              className={`${styles.icon} ${styles.feature_preview__txt_icon}`}
            />
          </>
        )}
      </div>
    </div>
  );
}
