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
import { Recipe } from '@/types/recipe.types';
import { Metadata } from 'next';
import { APT_ENDPOINTS } from '@/api/apiEndpoint.constants';

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Recipes', href: '' },
  { label: 'Bread', href: '' },
  { label: 'Quick bread', href: '' },
];

export async function generateMetadata(): Promise<Metadata> {
  const recipe: Recipe = await fetch(APT_ENDPOINTS.RECIPE_DETAIL).then(res => res.json());

  return {
    title: recipe.name,
    description: recipe.description,
  };
}

async function RecipesPage() {
  const recipe: Recipe = await fetch(APT_ENDPOINTS.RECIPE_DETAIL).then(res => res.json());

  return (
    <Container sx={{ padding: 6 }}>
      <Grid2 container spacing={5}>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Image src={recipeImage} alt="recipe image" />
        </Box>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <AppBreadcrumbs items={BREADCRUMB_ITEMS} />
          <Typography variant="h1" mt={2} mb={{ xs: 0, md: 10 }} fontSize={40} fontWeight="bold">
            {recipe.name}
          </Typography>

          <Typography mt={2} mb={{ xs: 3, md: 4 }} color="text.secondary">
            {recipe.description}
          </Typography>

          <Stack direction="row" gap={2} alignItems="center">
            <Image src={clockIcon} alt="clock icon" width={37} height={37} />
            <Grid2 container spacing={2} flex={1}>
              <Stack flex={1}>
                <Typography fontSize={14}>PREP</Typography>
                <Typography fontSize="medium">{recipe.prep}</Typography>
              </Stack>

              <Stack flex={1}>
                <Typography fontSize={14}>BAKE</Typography>
                <Typography fontSize="medium">{recipe.bake}</Typography>
              </Stack>

              <Stack flex={1}>
                <Typography fontSize={14}>TOTAL</Typography>
                <Typography fontSize="medium">{recipe.total}</Typography>
              </Stack>
            </Grid2>
          </Stack>

          <Divider sx={{ my: { xs: 3, md: 4 } }} />

          <Stack direction="row" gap={2} alignItems="center">
            <Image src={yieldIcon} alt="yield icon" width={37} height={37} />
            <Stack direction="row" gap={2} alignItems="center" flex={1}>
              <Stack flex={1}>
                <Typography fontSize={14}>YIELD</Typography>
                <Typography fontSize="medium">{recipe.yield}</Typography>
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
