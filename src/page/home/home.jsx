import React from 'react'
import { Banner } from '../../components/banner/banner'
import { Box } from '@mui/material'
import { About } from '../about/about'
import { Product } from '../product/product'
import {OurCard} from '../our/our'
import { ForYou } from '../../components/for_you/for_you';
import { OurProductPages } from '../../components/our_to/our_to';
import { Ecotizim } from '../../components/ecotizm/ecotizim'
import { Food } from '../../components/food/food'
import { News } from '../../components/news/news'

export const Home = () => {
  return (
    <Box>
      <Banner/>
      <About/>
      <Product/>
      <OurCard/>
      <ForYou/>
      <Ecotizim/>
      <Food/>
      <News/>
      <OurProductPages/>
    </Box>
  )
}

