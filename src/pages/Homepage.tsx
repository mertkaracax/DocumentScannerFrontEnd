import { useContext } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { DocumentScanner } from '../components/layout/DocumentScanner';
import styles from './Homepage.module.css';
import { SignStamp } from '../components/layout/SignStamp';
import { PageContext } from '../store/page-context';
import { BatchScanning } from '../components/layout/BatchScanning';
import { AdvancedFilters } from '../components/layout/AdvancedFilters';
import { ExportShare } from '../components/layout/ExportShare';

export function Homepage() {
  const pageNumberCtx = useContext(PageContext);
  return (
    <div className={styles['homepage']}>
      {pageNumberCtx.pageNumber === 1 && <DocumentScanner />}
      {pageNumberCtx.pageNumber === 2 && <SignStamp />}
      {pageNumberCtx.pageNumber === 3 && <BatchScanning />}
      {pageNumberCtx.pageNumber === 4 && <AdvancedFilters />}
      {pageNumberCtx.pageNumber === 5 && <ExportShare />}
      <Navbar />
    </div>
  );
}
