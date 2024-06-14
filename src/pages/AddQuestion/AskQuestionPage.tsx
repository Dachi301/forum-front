import MainLayout from "@/components/layouts/MainLayout.tsx";

import Select from 'react-select';
import Button from "@/components/buttons/Button.tsx";

const testOptions = [
    {
        value: 'germany',
        label: 'Germany'
    },
    {
        value: 'georgia',
        label: 'Georgia'
    },
    {
        value: 'spain',
        label: 'Spain'
    },
]

function AskQuestionPage() {
    return (
        <MainLayout>
            <div className={'w-[75%] bg-white py-7 px-10 shadow-default'}>
                <form className={'flex flex-col gap-5'}>
                    <div>
                        <Select
                            defaultValue={[testOptions[2], testOptions[3]]}
                            isMulti
                            name="colors"
                            options={testOptions}
                            className="basic-multi-select text-sm"
                            classNamePrefix="select"
                            isClearable={false}
                        />
                    </div>
                    <div>
                        <input
                            placeholder={'Type catching attention title'}
                            type={'text'}
                            className={'w-full outline-0 bg-white rounded border-[2px] border-[#EAEAEA] p-3 text-sm'}/>
                    </div>
                    <div>
                        <textarea
                            placeholder={'Type your question'}
                            className={'w-full outline-0 p-3 border-[2px] border-[#EAEAEA] rounded text-sm'}
                            id="w3review"
                            name="w3review"
                            rows={6}
                            cols={50}></textarea>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <div>
                            <Button className={'py-3 px-5 bg-[#1682FD] text-white text-xs rounded'} onClick={() => {
                            }} text={'Add Image'}/>
                        </div>
                        <div>
                            <Button onClick={() => {
                            }} text={'Publish'}/>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}

export default AskQuestionPage;