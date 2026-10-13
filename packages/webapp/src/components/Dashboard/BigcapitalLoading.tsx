import classNames from 'classnames';
import React from 'react';

import '@/style/components/BigcapitalLoading.scss';

interface BigcapitalLoadingProps {
  className?: string;
}

/**
 * WorkflowAutomate logo loading.
 */
export default function BigcapitalLoading({
  className,
}: BigcapitalLoadingProps) {
  return (
    <div className={classNames('bigcapital-loading', className)}>
      <div className="center">
        <img
          src="/workflowautomate-logo.png"
          alt="WorkflowAutomate"
          height={42}
          style={{ objectFit: 'contain', maxWidth: '280px' }}
          className="bigcapital-logo"
        />
      </div>
    </div>
  );
}
