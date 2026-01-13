import cifronL from '@/assets/cifronL.svg'
import cifron from '@/assets/cifron.svg'
import graf from '@/assets/grafico visual.svg'
import grafL from '@/assets/grafico visualL.svg'




export const light = {
    title: 'light',

    colors: {
        background: '#000000ff',
        text: '#F1fdd1',
        card: '#22252C',
        
  },

  images: {
    cifrao: cifronL,
    graf: grafL
  }
}

export const dark = {
    title: 'dark',
    colors: {
        background: '#F1fdd1',
        text: '#163532',
        card: '#fff',  
  },
  images: {
    cifrao: cifron,
    graf: graf
  }
}

export type ThemeType = typeof light
