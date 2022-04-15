import {useState} from 'react';
import {CodeBlock} from '@atlaskit/code';
import Form, {Field, FormSection} from '@atlaskit/form';
import Tabs, {Tab, TabList, TabPanel} from '@atlaskit/tabs';
import TextArea from '@atlaskit/textarea';

import Layout from 'src/components/templates/layout/layout';

export default function Page() {
  return (
    <Layout title="Base64 Encode & Decode">
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
                  <TextArea rows={6} onChange={onChange}/>
                )}
              </Field>

              <Field id="output" name="output" label="Output">
                {() => (
                  <CodeBlock language="text" text={btoa(input)}/>
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
          <form {...formProps}>
            <FormSection>
              <Field id="input" name="input" label="Input">
                {() => (
                  <TextArea rows={6} onChange={onChange}/>
                )}
              </Field>

              <Field id="output" name="output" label="Output">
                {() => (
                  <CodeBlock language="text" text={atob(input)}/>
                )}
              </Field>
            </FormSection>
          </form>
        )}
      </Form>
    </div>
  );
}
