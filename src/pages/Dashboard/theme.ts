// import cifronL from '@/assets/cifronL.svg'
// import cifron from '@/assets/cifron.svg'
// import graf from '@/assets/grafico visual.svg'
// import grafL from '@/assets/grafico visualL.svg'




export const light = {
    title: 'light',

    colors: {
        background: '#000000ff',
        text: '#F1fdd1',
        card: '#22252C',
        cardg: '#000000ff',
        borderg: '#22252C'
        
  },

  images: {
    cifrao: new URL('@/assets/cifron.svg', import.meta.url).href,
    graf: new URL('@/assets/grafico visual.svg', import.meta.url).href
  }

}

export const dark = {
    title: 'dark',
    colors: {
        background: '#F1fdd1',
        text: '#163532',
        card: '#fff', 
        cardg: '#fff',
        borderg: '#F1fdd1'
  },
  images: {
    cifrao: new URL('@/assets/cifronL.svg', import.meta.url).href,
    graf: new URL('@/assets/grafico visualL.svg', import.meta.url).href
  }

}

export type ThemeType = typeof dark
