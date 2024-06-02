import Image from "next/image";
import { Button, Stack } from "react-bootstrap";
import { ModalComponent } from "./components/Modal";

export default function Home() {
  return (
<div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">نوار کناری</div>
      <div className="col-md-8">
       صفحه اصلی
        <div className="d-none d-md-block">
صحفه متوسط
        </div>
        <div className="mt-5 mb-3">
          Margin Top and Morgin Bottom
        </div>
        <div className="text-center text-md-left">
        <Stack direction="horizontal" gap={2}>
 <ModalComponent />
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
        </div>
        </div>
    </div>
  </div>
</div>
  );
}
