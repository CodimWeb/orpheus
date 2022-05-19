export default function ({ size = 4, className = 'col-3' }) {
  return Array(size).fill().map((_, i) => <div className={className} key={i} />);
}
