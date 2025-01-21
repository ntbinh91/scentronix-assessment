import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import { BreadcrumbItem } from '@/components/AppBreadcrumbs/AppBreadcrumbs';
import { Box, Button, Container, Divider, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import clockIcon from '@/assets/images/clock.svg';
import yieldIcon from '@/assets/images/yield.svg';
import printIcon from '@/assets/images/print.svg';
import recipeImage from '@/assets/images/demo/whole-grain-banana-bread.webp';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Recipes', href: '/recipes' },
  { label: 'Bread', href: '/recipes/bread' },
  { label: 'Quick bread', href: '/recipes/bread/quick-bread' },
];

function RecipesPage() {
  return (
    <Container sx={{ padding: 6 }}>
      <Grid2 container spacing={5}>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Image src={recipeImage} alt="recipe image" />
        </Box>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <AppBreadcrumbs items={BREADCRUMB_ITEMS} />
          <Typography variant="h1" mt={2} mb={{ xs: 0, md: 10 }} fontSize={40} fontWeight="bold">
            Whole-Grain Banana Bread
          </Typography>

          <Typography mt={2} mb={{ xs: 3, md: 4 }} color="text.secondary">
            {`This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly
            moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we
            often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this
            bread delicious — it's versatile.`}
          </Typography>

          <Stack direction="row" gap={2} alignItems="center">
            <Image src={clockIcon} alt="clock icon" width={37} height={37} />
            <Grid2 container spacing={2} flex={1}>
              <Stack flex={1}>
                <Typography fontSize={14}>PREP</Typography>
                <Typography fontSize="medium">10 mins</Typography>
              </Stack>

              <Stack flex={1}>
                <Typography fontSize={14}>BAKE</Typography>
                <Typography fontSize="medium">1 hr to 1hr 15 mins</Typography>
              </Stack>

              <Stack flex={1}>
                <Typography fontSize={14}>TOTAL</Typography>
                <Typography fontSize="medium">1 hr 10 mins</Typography>
              </Stack>
            </Grid2>
          </Stack>

          <Divider sx={{ my: { xs: 3, md: 4 } }} />

          <Stack direction="row" gap={2} alignItems="center">
            <Image src={yieldIcon} alt="yield icon" width={37} height={37} />
            <Stack direction="row" gap={2} alignItems="center" flex={1}>
              <Stack flex={1}>
                <Typography fontSize={14}>YIELD</Typography>
                <Typography fontSize="medium">1 loaf, 12 generous servings</Typography>
              </Stack>

              <Stack gap={1} direction={{ xs: 'column', md: 'row' }}>
                <Button variant="outlined" startIcon={<AddIcon />}>
                  Save Recipe
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Image src={printIcon} alt="print icon" width={20} height={20} />}
                >
                  Print
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Image src={recipeImage} alt="recipe image" />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default RecipesPage;
