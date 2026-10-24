import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card } from './components';
const Global = createGlobalStyle`
  * { box-sizing: border-box; } body { margin: 0; background: #f7f8f2; color: #173c30; font-family: Arial, sans-serif; }
  button, select, input { font: inherit; } h1 { font-size: clamp(2rem, 5vw, 3.8rem); letter-spacing: -0.04em; margin: 1rem 0; }
`;
const Page = styled.main`max-width: 1120px; margin: auto; padding: clamp(18px, 4vw, 48px);`;
const Header = styled.header`display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding-bottom: 24px; border-bottom: 1px solid #d2ddcd; span { font-size: 0.8rem; letter-spacing: 0.1em; }`;
const Intro = styled.section`padding: 36px 0; p { max-width: 570px; line-height: 1.7; }`;
const Grid = styled.div`display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px; margin: 24px 0;`;
const Stack = styled.div`display: flex; flex-direction: column; align-items: flex-start; gap: 14px;`;
const Toolbar = styled.section`display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin: 26px 0; padding: 20px; background: #e8efdf; border-radius: 14px;`;
export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [collection, setCollection] = useState('Components');
  const [choice, setChoice] = useState('default');
  return <><Global /><Page>
    <Header><strong>UI / GARDEN</strong><span>PARNEET KAUR · ASSIGNMENT 12</span></Header>
    <Intro><span>REACT + TYPESCRIPT + STORYBOOK</span><h1>Small pieces.<br />Endless possibilities.</h1><p>A collection of 13 responsive components. Explore the elements below, or open Storybook to adjust their properties one at a time.</p></Intro>
    <HeroImage disabled={disabled} />
    <Toolbar><strong>Try the library</strong><Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable components' : 'Preview disabled state'}</Button><span aria-live="polite">{disabled ? 'Disabled' : 'Default'} state</span></Toolbar>
    <Grid>
      <Card title="01 / Actions" disabled={disabled}><Stack><Label disabled={disabled}>Button</Label><Button disabled={disabled} onClick={() => setCount(count + 1)}>Plant a seed</Button><Text disabled={disabled} aria-live="polite">Seeds planted: {count}</Text></Stack></Card>
      <Card title="02 / Choices" disabled={disabled}><Stack><Label htmlFor="collection" disabled={disabled}>Collection</Label><Dropdown id="collection" disabled={disabled} value={collection} onChange={e => setCollection(e.target.value)} /><RadioButton name="style" label="Default style" value="default" checked={choice === 'default'} onChange={() => setChoice('default')} disabled={disabled} /><RadioButton name="style" label="Compact style" value="compact" checked={choice === 'compact'} onChange={() => setChoice('compact')} disabled={disabled} /><Text disabled={disabled}>{collection} · {choice}</Text></Stack></Card>
      <Card title="03 / Imagery" disabled={disabled}><Img disabled={disabled} /><Text disabled={disabled}>Local artwork. Responsive images. No external image service needed.</Text></Card>
    </Grid>
    <h2>Component inventory</h2>
    <Table disabled={disabled}><TableHeader disabled={disabled} /><tbody>{['Button, Label, Text','Table, TableHeader, TableRow, TableCell, TableFooter','Dropdown, RadioButton','Img, HeroImage, Card'].map(group => <TableRow key={group} disabled={disabled}><TableCell disabled={disabled}>{group}</TableCell><TableCell disabled={disabled}>Default + Disabled</TableCell></TableRow>)}</tbody><TableFooter disabled={disabled} /></Table>
    <Text backgroundColor="#f7f8f2">Built by Parneet Kaur · UI Garden · 2026</Text>
  </Page></>;
}
