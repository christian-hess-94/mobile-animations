

import React, { Component } from 'react'
import { Text, View, Animated, TouchableOpacity, Dimensions } from 'react-native'
import Scene from './Scene/Scene'
import Tab1 from './TabsOld/Tab1'

export default class App extends Component {
  state = {
    headerAnimation: new Animated.Value(0),
    subMenuAnimation: new Animated.Value(0),
    loadingAnimation: new Animated.Value(0),
    contentAnimation: new Animated.Value(0),
    footerAnimation: new Animated.Value(0),
    drawerAnimation: new Animated.Value(0),
    drawerBackdropAnimation: new Animated.Value(0),
    drawerItemsAnimation: new Animated.Value(0),
    drawerHeaderAnimation: new Animated.Value(0),
    revealTabContentAnimation: new Animated.Value(1),
    changeTabAnimation: new Animated.Value(0),
    tabAnimation: new Animated.Value(0),

    duration: 500,

    tabs: [
      {
        title: 'Tab1',
        content: <Tab1 />,
        icon: require('./images/menu.png')
      },
      {
        title: 'Tab2',
        content: <Text>Tab2</Text>,
        icon: undefined
      },
      {
        title: 'Tab3',
        content: <Text>Tab3</Text>,
        icon: undefined
      },
      {
        title: 'Tab4',
        content: <Text>Tab4</Text>,
        icon: undefined
      },
      {
        title: 'Tab5',
        content: <Text>Tab5</Text>,
        icon: undefined
      },
      {
        title: 'Tab6',
        content: <Text>Tab6</Text>,
        icon: require('./images/menu.png')
      },
      {
        title: 'Tab7',
        content: <Text>Tab7</Text>,
        icon: undefined
      }
    ],
    tabCurrent: 0,
    drawerItems: [
      {
        title: 'Item 1',
        pressed: () => {
          alert('Item 1')
        }
      },
      {
        title: 'Item 2',
        pressed: () => {
          alert('Item 2')
        }
      },
      {
        title: 'Item 3',
        pressed: () => {
          alert('Item 3')
        }
      },
    ],

    sceneStatus: 'done' //loading, error, done
  }

  componentDidMount() {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      tabAnimation,
      duration,
    } = this.state
    this.execAnimation(headerAnimation, 1500, 1)
    this.execAnimation(footerAnimation, 1500, 1)
    this.execAnimation(contentAnimation, 1500, 1)
  }

  /**
   * Função para executar uma animação
   * @param animation Objeto com valor da animação
   * @param duration Duração da animação em ms. Padrão do state usado caso seja null
   * @param toValue Para que valor a animação vai (padrão entre 0 e 1)
   */
  execAnimation = (animation, duration, toValue) => {
    Animated.timing(animation,
      {
        toValue,
        duration: duration ? duration : this.state.duration
      }).start()
  }

  toggleSubMenu = () => {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      tabAnimation,
      duration,
    } = this.state
    if (JSON.stringify(subMenuAnimation) === '0') {
      this.execAnimation(subMenuAnimation, 250, 1)
    } else {
      this.execAnimation(subMenuAnimation, 250, 0)
    }
    // alert('toggle')
  }

  startLoadingContent = () => {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      tabAnimation,
      duration,

      menuIsOpen,
    } = this.state

    this.execAnimation(subMenuAnimation, 250, 0)
    this.execAnimation(headerAnimation, null, 0)
    this.execAnimation(footerAnimation, null, 0)
    this.execAnimation(contentAnimation, null, 0)
    setTimeout(() => this.execAnimation(loadingAnimation, null, 1), duration)
    setTimeout(() => {
      this.stopLoadingContent()
    }, 3000)
  }

  stopLoadingContent = () => {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      tabAnimation,
      duration,
    } = this.state
    this.execAnimation(headerAnimation, null, 1)
    this.execAnimation(footerAnimation, null, 1)
    this.execAnimation(loadingAnimation, null, 0)
    setTimeout(() => this.execAnimation(contentAnimation, null, 1), duration)

  }

  changeTab = (tabNumber, tabTitle) => {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      revealTabContentAnimation,
      changeTabAnimation,
      duration,
      tabCurrent
    } = this.state
    this.setState({ tabCurrent: tabNumber })
    if (tabNumber > tabCurrent) {
      this.goToNextTab(tabNumber)
    } else if (tabNumber < tabCurrent) {
      this.goToPreviousTab(tabNumber)
    }
  }
  //revealTabContentAnimation,
  //changeTabAnimation
  goToNextTab = (tabToGo) => {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      revealTabContentAnimation,
      changeTabAnimation,
      duration,
      tabCurrent
    } = this.state
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          revealTabContentAnimation,
          {
            toValue: 0,
            duration,
          }
        ),
        Animated.timing(
          changeTabAnimation,
          {
            toValue: Dimensions.get('window').width * (tabToGo),
            duration,
          }
        )
      ]),
      Animated.timing(
        revealTabContentAnimation,
        {
          toValue: 1,
          duration: duration / 2,
        }
      ),
    ]).start()
  }

  goToPreviousTab = (tabToGo) => {
    let {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      revealTabContentAnimation,
      changeTabAnimation,
      tabAnimation,
      duration,
      tabCurrent
    } = this.state
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          revealTabContentAnimation,
          {
            toValue: 0,
            duration,
          }
        ),
        Animated.timing(
          changeTabAnimation,
          {
            toValue: Dimensions.get('window').width * (tabToGo),
            duration,
          }
        )
      ]),
      Animated.timing(
        revealTabContentAnimation,
        {
          toValue: 1,
          duration: duration / 2,
        }
      ),
    ]).start()
  }

  openMenu = () => {
    this.execAnimation(this.state.drawerAnimation, null, 1)
    this.execAnimation(this.state.drawerItemsAnimation, 600, 1)
  }

  closeMenu = () => {
    this.execAnimation(this.state.drawerItemsAnimation, 600, 0)
    this.execAnimation(this.state.drawerAnimation, null, 0)
  }




  render() {
    const {
      headerAnimation,
      subMenuAnimation,
      loadingAnimation,
      contentAnimation,
      footerAnimation,
      drawerAnimation,
      drawerBackdropAnimation,
      drawerItemsAnimation,
      drawerHeaderAnimation,
      revealTabContentAnimation,
      changeTabAnimation,
      tabAnimation,
      duration,
      tabs,
      tabCurrent,
      drawerItems,

      sceneStatus,
    } = this.state
    return (
      <>
        <Scene
          headerAnimation={headerAnimation}
          subMenuAnimation={subMenuAnimation}
          loadingAnimation={loadingAnimation}
          contentAnimation={contentAnimation}
          footerAnimation={footerAnimation}
          drawerAnimation={drawerAnimation}
          drawerBackdropAnimation={drawerBackdropAnimation}
          drawerItemsAnimation={drawerItemsAnimation}
          drawerHeaderAnimation={drawerHeaderAnimation}
          revealTabContentAnimation={revealTabContentAnimation}
          changeTabAnimation={changeTabAnimation}
          tabAnimation={tabAnimation}
          duration={duration}
          execAnimation={this.execAnimation}
          toggleSubMenu={this.toggleSubMenu}

          header='Titulo da Scene'
          subMenuBody={
            <TouchableOpacity onPress={() => this.startLoadingContent()}>
              <Text>Load Content</Text>
            </TouchableOpacity>
          }
          openMenu={this.openMenu}
          closeMenu={this.closeMenu}
          hasHeader
          hasSubMenu
          hasFooter
          footerBody={
            <Text style={{ textAlign: 'center' }}>{tabCurrent + 1}/{tabs.length}</Text>
          }
          hasTabs
          tabs={tabs}
          drawerTitle='Olá Christian'
          tabCurrent={tabCurrent}
          changeTab={this.changeTab}
          hasLeftButton
          leftButtonPressed={this.openMenu}
          rightButtonPressed={this.startLoadingContent}
          hasRightButton
          drawerItems={drawerItems}
          sceneContent={
            <>
              <TouchableOpacity onPress={() => this.startLoadingContent()}>
                <Text>Load Content</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.openMenu()}>
                <Text>Open Menu</Text>
              </TouchableOpacity>
            </>
          }
        />
      </>
    )
  }
}





// import React, { useState } from 'react'
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
// import Scene from './Scene2/Scene'
// import TabsOld from './TabsOld/TabsOld'
// import Tab1 from './TabsOld/Tab1'
// import Tab2 from './TabsOld/Tab2'
// import Tab3 from './TabsOld/Tab3'

// const App = () => {
//   console.disableYellowBox = true
//   const [loadingContent, setLoadingContent] = useState(false)
//   const [openSubMenu, setOpenSubMenu] = useState(false)
//   const [tabCurrent, setCurrentTab] = useState(0)
//   const loadContent = () => {
//     setLoadingContent(true)
//     setTimeout(() => { setLoadingContent(false) }, 3000)
//   }
//   const closeSubMenu = () => {
//     setOpenSubMenu(false)
//   }
//   // onlyOnce && loadContent()
//   return (
//     <>
//       {/* <TabsOld /> */}
//       <Scene
//         loadingContent={loadingContent}
//         hasHeader
//         header='Título da página'
//         hasLeftButton
//         leftButtonText='Botão Esq.'
//         hasRightButton
//         rightButtonText='Botão Dir.'
//         //////////
//         drawerItems={
//           [
//             {
//               title: 'Resumo de Obras',
//               clicked: () => {
//                 alert('Resumo de Obras')
//               }
//             },
//             {
//               title: 'Redes Sociais',
//               clicked: () => {
//                 alert('Redes Sociais')
//               }
//             },
//             {
//               title: 'Sobre o app',
//               clicked: () => {
//                 alert('Sobre o app')
//               }
//             },
//           ]}
//         drawerHeader={
//           <Text> Bem vindo Christian</Text>
//         }
//         ///////////
//         subMenuTitleClose='Fechar'
//         subMenuTitleOpen='Abrir'
//         hasSubMenu
//         subMenuBody={
//           <>
//             <TouchableOpacity onPress={() => loadContent()}>
//               <Text style={{ textAlign: 'center' }}>
//                 Carregar conteúdo
//               </Text>
//             </TouchableOpacity>
//           </>
//         }
//         /////////
//         hasFooter
//         footerBody={
//           < Text > {tabCurrent}</Text >
//         }
//         //////////
//         hasTabs
//         tabTitles={['Resumo', 'Visitas', 'Obras', 'Fiscais', 'Diárias', 'Tab1', 'Tab2', 'Tab3']}
//         tabs={
//           [
//             <Text>Aba de resumo</Text>,
//             <Text>Aba de Visitas</Text>,
//             <Text>Aba de Obras</Text>,
//             <Text>Aba de Fiscais</Text>,
//             <Text>Aba de Diárias</Text>,
//             <Tab1 />,
//             <Tab2 />,
//             <Tab3 />,
//             // <Text>Tab7</Text>,
//             // <Text>Tab8</Text>,
//             // <Text>Tab9</Text>,
//           ]}
//         tabCurrent={tabCurrent}
//         setCurrentTab={setCurrentTab}
//         ///////////
//         sceneBody={
//           <>
//             <TouchableOpacity onPress={() => loadContent()}>
//               <Text>
//                 Carregar conteúdo
//               </Text>
//             </TouchableOpacity>
//             <Text>Conteudo1</Text>
//             <Text>Conteudo2</Text>
//             <Text>Conteudo3</Text>
//             <Text>Conteudo4</Text>
//             <Text>Conteudo5</Text>
//             <Text>Conteudo Final</Text>
//           </>
//         } />
//     </>
//   )
// }

// export default App
