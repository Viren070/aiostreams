import React from 'react';
import styles from './ServiceInput.module.css';

interface Field {
  label: string;
  link: string;
  value: string;
  setValue: (value: string) => void;
}

interface ServiceInputProps {
  serviceName: string;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  fields: Field[];
}

const ServiceInput: React.FC<ServiceInputProps> = ({
  serviceName,
  enabled,
  setEnabled,
  fields,
}) => {
  return (
    <div
      className={`${styles.card} ${enabled ? styles.enabled : styles.disabled}`}
    >
      <div className={styles.header}>
        <span className={styles.serviceName}>{serviceName}</span>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className={styles.checkbox}
        />
      </div>

      {enabled && (
        <div className={styles.fields}>
          {fields.map((field, index) => (
            <div key={index} className={styles.field}>
              <label>
                {field.label}. Get it{' '}
                <a
                  href={field.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'underline' }}
                >
                  here
                </a>
              </label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => field.setValue(e.target.value.trim())}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceInput;
