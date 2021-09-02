import Button from 'components/Button';

export default function IndexPage() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      <Button type="primary">
        Primary
      </Button>

      <Button type="secondary" size="lg">
        Secondary
      </Button>
    </div>
  );
}
