
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Scene from './Scene/Scene'
import TabsOld from './TabsOld/TabsOld'
import Tab1 from './TabsOld/Tab1'
import Tab2 from './TabsOld/Tab2'
import Tab3 from './TabsOld/Tab3'

const App = () => {
  console.disableYellowBox = true
  const [loadingContent, setLoadingContent] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const loadContent = () => {
    setLoadingContent(true)
    setTimeout(() => { setLoadingContent(false) }, 3000)
  }
  const closeSubMenu = () => {
    setOpenSubMenu(false)
  }
  // onlyOnce && loadContent()
  return (
    <>
      {/* <TabsOld /> */}
      <Scene
        loadingContent={loadingContent}
        hasHeader
        header='Título da página'
        hasLeftButton
        leftButtonText='Botão Esq.'
        hasRightButton
        rightButtonText='Botão Dir.'
        //////////
        drawerItems={
          [
            {
              title: 'Resumo de Obras',
              clicked: () => {
                alert('Resumo de Obras')
              }
            },
            {
              title: 'Redes Sociais',
              clicked: () => {
                alert('Redes Sociais')
              }
            },
            {
              title: 'Sobre o app',
              clicked: () => {
                alert('Sobre o app')
              }
            },
          ]}
        drawerHeader={
          <Text> Bem vindo Christian</Text>
        }
        ///////////
        subMenuTitleClosed='Fechar'
        subMenuTitleOpen='Abrir'
        hasSubMenu
        subMenuBody={
          <>
            <TouchableOpacity onPress={() => loadContent()}>
              <Text style={{ textAlign: 'center' }}>
                Carregar conteúdo
              </Text>
            </TouchableOpacity>
          </>
        }
        /////////
        hasFooter
        footerBody={
          < Text > {currentTab}</Text >
        }
        //////////
        hasTabs
        tabTitles={['Resumo', 'Visitas', 'Obras', 'Fiscais', 'Diárias', 'Tab1', 'Tab2', 'Tab3']}
        tabs={
          [
            <Text>Aba de resumo</Text>,
            <Text>Aba de Visitas</Text>,
            <Text>Aba de Obras</Text>,
            <Text>Aba de Fiscais</Text>,
            <Text>Aba de Diárias</Text>,
            <Tab1 />,
            <Tab2 />,
            <Tab3 />,
            // <Text>Tab7</Text>,
            // <Text>Tab8</Text>,
            // <Text>Tab9</Text>,
          ]}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        ///////////
        sceneBody={
          <>
            <TouchableOpacity onPress={() => loadContent()}>
              <Text>
                Carregar conteúdo
              </Text>
            </TouchableOpacity>
            <Text>Conteudo1</Text>
            <Text>Conteudo2</Text>
            <Text>Conteudo3</Text>
            <Text>Conteudo4</Text>
            <Text>Conteudo5</Text>
            <Text>Conteudo Final</Text>
          </>
        } />
    </>
  )
}

export default App
