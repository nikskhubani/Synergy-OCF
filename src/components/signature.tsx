import { useRef, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import Signature from 'signature_pad';

type SignaturePadProps = {
  onSignatureChange?: (value: string) => void,
  value?: string,
}

const SignaturePad = ({onSignatureChange, value}: SignaturePadProps) => {
  const canvasRef = useRef(null);
  const [signaturePad, setSignaturePad] = useState<Signature>();

  useEffect(() => {
    if (canvasRef.current) {
      const signaturePadInstance = new Signature(canvasRef.current);
      setSignaturePad(signaturePadInstance);
    }

    return () => {
      if (signaturePad) {
        signaturePad.clear();
      }
    };
  }, [canvasRef]);

  useEffect(() => {
    const changeHandler = (event: Event) => {
      event.preventDefault()
      if (signaturePad) {
        const dataUrl = signaturePad.toDataURL();
        if (onSignatureChange) onSignatureChange(dataUrl)
      }
    }

    if (signaturePad) {
      signaturePad.addEventListener('endStroke', changeHandler);
    }

    return () => {
      if (signaturePad) {
        signaturePad.removeEventListener('endStroke', changeHandler)
      }
    };
  }, [signaturePad])

  useEffect(() => {
    if (signaturePad && value) {
      signaturePad.fromDataURL(value);
    }
  }, [signaturePad, value])

  const clearSignature = () => {
    if (signaturePad) {
      signaturePad.clear();
    }
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <canvas
        ref={canvasRef}
        width={600}
        height={40}
        style={{ border: '1px solid #000' }}
      ></canvas>
      <Button onClick={clearSignature}>Clear</Button>
    </Box>
  );
};

export default SignaturePad;
