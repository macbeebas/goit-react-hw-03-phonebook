import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section className={css.section}>
      <div className={css.paper}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
