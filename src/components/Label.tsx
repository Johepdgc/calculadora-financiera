interface LabelProps {
  text: string;
}

export function Label({ text }: LabelProps) {
  return (
    <label className="block text-lg font-medium text-gray-700">{text}</label>
  );
}

export default Label;
