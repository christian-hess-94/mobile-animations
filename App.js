
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Scene from './Scene/Scene'
import TabsOld from './TabsOld/TabsOld'
import Tab1 from './TabsOld/Tab1'
import Tab2 from './TabsOld/Tab2'
import Tab3 from './TabsOld/Tab3'

const App = () => {
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
    <View>
      {/* <TabsOld /> */}
      <Scene
        loadingContent={loadingContent}
        hasHeader
        header='Título da página'
        hasSubMenu
        subMenuBody={
          <>
            <TouchableOpacity onPress={() => loadContent()}>
              <Text style={{ textAlign: 'center' }}>
                Load Content
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenSubMenu()}>
              <Text>
                Close Submenu
              </Text>
            </TouchableOpacity>
          </>
        }
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
        hasFooter
        hasTabs
        tabs={[
          <Text>Aba de resumo</Text>,
          <Text>Aba de Visitas</Text>,
          <Text>Aba de Obras</Text>,
          <Text>Aba de Fiscais</Text>,
          <Text>Aba de Diárias</Text>,
          // <Text>Tab7</Text>,
          // <Text>Tab8</Text>,
          // <Text>Tab9</Text>,
        ]}
        tabTitles={['Resumo', 'Visitas', 'Obras', 'Fiscais', 'Diárias', 'Detalhes', 'Outros']}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        footerBody={
          <Text>{currentTab}</Text>
        }
        sceneBody={
          <>
            <TouchableOpacity onPress={() => loadContent()}>
              <Text>
                Load Content
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenSubMenu()}>
              <Text>
                Close Submenu
              </Text>
            </TouchableOpacity>
            <Text>Content1</Text>
            <Text>Content2</Text>
            <Text>Content3</Text>
            <Text>Content4</Text>
            <Text>Content5</Text>
            <Text>Content6</Text>
            <Text>Content7</Text>
            <Text>Content8</Text>
            <Text>Content9</Text>
            <Text>Content10</Text>
            <Text>Content11</Text>
            <Text>Content12</Text>
            <Text>Content13</Text>
            <Text>Content14</Text>
            <Text>Content15</Text>
            <Text>Content16</Text>
            <Text>Content17</Text>
            <Text>Content18</Text>
            <Text>Content19</Text>
            <Text>Content20</Text>
            <Text>Content21</Text>
            <Text>Content22</Text>
            <Text>Content23</Text>
            <Text>Content24</Text>
            <Text>Content25</Text>
            <Text>Content26</Text>
            <Text>Content27</Text>
            <Text>Content28</Text>
            <Text>Content29</Text>
            <Text>Content30</Text>
            <Text>Content31</Text>
            <Text>Content32</Text>
            <Text>Content33</Text>
            <Text>Content34</Text>
            <Text>Content35</Text>
            <Text>Content36</Text>
            <Text>Content37</Text>
            <Text>Content38</Text>
            <Text>Content39</Text>
            <Text>Content40</Text>
            <Text>Content41</Text>
            <Text>Content42</Text>
            <Text>Content43</Text>
            <Text>Content44</Text>
            <Text>Content45</Text>
            <Text>Content46</Text>
            <Text>Content47</Text>
            <Text>Content48</Text>
            <Text>Content49</Text>
            <Text>Content50</Text>
            <Text>Content51</Text>
            <Text>Content52</Text>
            <Text>Content53</Text>
            <Text>Content54</Text>
            <Text>Content55</Text>
            <Text>Content56</Text>
            <Text>Content57</Text>
            <Text>Content58</Text>
            <Text>Content59</Text>
            <Text>Content60</Text>
            <Text>Content61</Text>
            <Text>Content Final</Text>
          </>
        } />
    </View>
  )
}

export default App
