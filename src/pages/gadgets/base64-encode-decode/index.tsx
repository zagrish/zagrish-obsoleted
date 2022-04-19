import {useState} from 'react';
import Form, {Field, FormSection} from '@atlaskit/form';
import Tabs, {Tab, TabList, TabPanel} from '@atlaskit/tabs';
import TextArea from '@atlaskit/textarea';

import Layout from 'src/components/templates/layout/layout';

export default function Page() {
  const breadcrumbs = [
    {text: 'Encode & Decode'},
  ];

  return (
    <Layout breadcrumbs={breadcrumbs} title="Base64 Encode & Decode">
      <Tabs id="default" onChange={console.log}>
        <TabList>
          <Tab>Encode</Tab>
          <Tab>Decode</Tab>
        </TabList>

        <TabPanel>
          <Encoder/>
        </TabPanel>

        <TabPanel>
          <Decoder/>
        </TabPanel>
      </Tabs>
    </Layout>
  );
}

function Encoder() {
  const [input, setInput] = useState('');

  const onChange = (e: any) => {
    setInput(e.target.value);
  }

  return (
    <div className="flex-1">
      <Form onSubmit={null}>
        {({formProps}) => (
          <form {...formProps}>
            <FormSection>
              <Field id="input" name="input" label="Input">
                {() => (
                  <TextArea resize="none" rows={12} onChange={onChange}/>
                )}
              </Field>

              <Field id="output" name="output" label="Output">
                {() => (
                  <TextArea resize="none" rows={12} value={btoaSafely(input)} isReadOnly/>
                )}
              </Field>
            </FormSection>
          </form>
        )}
      </Form>
    </div>
  );
}

function Decoder() {
  const [input, setInput] = useState('');

  const onChange = (e: any) => {
    setInput(e.target.value);
  }

  return (
    <div className="flex-1">
      <Form onSubmit={null}>
        {({formProps}) => (
          <form className="flex-1" {...formProps}>
            <FormSection>
              <Field id="input" name="input" label="Input">
                {() => (
                  <TextArea resize="none" rows={12} onChange={onChange}/>
                )}
              </Field>

              <Field id="output" name="output" label="Output">
                {() => (
                  <TextArea resize="none" rows={12} value={atobSafely(input)} isReadOnly/>
                )}
              </Field>
            </FormSection>
          </form>
        )}
      </Form>
    </div>
  );
}

function btoaSafely(input: string): string {
  if (typeof window === 'undefined' || typeof window.btoa === 'undefined') {
    return '';
  }

  return window.btoa(input);
}

function atobSafely(input: string): string {
  if (typeof window === 'undefined' || typeof window.atob === 'undefined') {
    return '';
  }

  try {
    return window.atob(input);
  } catch (e: any) {
    return e.message;
  }
}
