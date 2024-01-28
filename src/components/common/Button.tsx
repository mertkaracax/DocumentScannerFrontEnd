import styles from './Button.module.css';
import { useContext } from 'react';
import { PageContext } from '../../store/page-context';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { FaCertificate } from 'react-icons/fa';
import { PiScanFill } from 'react-icons/pi';
import { IoColorFilter } from 'react-icons/io5';
import { BiSolidFileExport } from 'react-icons/bi';
import React from 'react';
import { PageTitles } from '../../constants';

const iconComponents: Record<PageTitles, JSX.Element> = {
  [PageTitles.DocumentScanner]: <IoDocumentTextSharp />,
  [PageTitles.SignAndStamp]: <FaCertificate />,
  [PageTitles.BatchScanning]: <PiScanFill />,
  [PageTitles.AdvancedFilters]: <IoColorFilter />,
  [PageTitles.ExportAndShare]: <BiSolidFileExport />,
};

type ButtonProps = {
  number: number;
  title: PageTitles;
};

export function Button(props: ButtonProps) {
  const pageNumberCtx = useContext(PageContext);

  const isSelected = props.number === pageNumberCtx.pageNumber;

  const decideButtonClasses = () => {
    return isSelected
      ? `${styles.button__icon_container} ${styles.animated_circle}`
      : styles.button__icon_container;
  };

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: isSelected ? '#9EC1E32E' : 'white' }}
      onClick={() => {
        pageNumberCtx.changePage(props.number);
      }}
    >
      <div className={decideButtonClasses()}>
        {React.cloneElement(iconComponents[props.title], {
          color: isSelected ? '#177AD8' : 'gray',
          className: styles.button__icon_container__icon,
        })}
      </div>
      <span
        style={{ backgroundColor: isSelected ? 'transparent' : 'white' }}
        className={styles.button__text}
      >
        {props.title}
      </span>
    </button>
  );
}
