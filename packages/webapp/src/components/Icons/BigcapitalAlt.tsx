interface BigcapitalAltProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function BigcapitalAlt(props: BigcapitalAltProps) {
  return (
    <img
      src="/workflowautomate-logo.png"
      alt="WorkflowAutomate"
      width={props.width || 214}
      height={props.height || 37}
      style={{ objectFit: 'contain', ...props.style }}
      {...props}
    />
  );
}
