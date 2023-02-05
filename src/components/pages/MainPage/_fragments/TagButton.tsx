import React from 'react';

import { Box, Button } from '@chakra-ui/react';

function TagButton({
  id,
  name,
  value,
  handleClick,
}: {
  id: number;
  name: string;
  value: number;
  handleClick: (e: React.MouseEvent) => void;
}) {
  return (
    <Box>
      <Button
        value={id}
        variant="review"
        onClick={handleClick}
        isActive={value === id}
      >
        {name}
      </Button>
    </Box>
  );
}

export default TagButton;
