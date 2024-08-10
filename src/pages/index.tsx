import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs defaultValue="all">
            <TabsList className="flex gap-2 ">
              <TabsTrigger
                value="all"
                className="rounded-[30px] border border-gray-200 px-[24px] py-[12px] text-[14px] font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="rounded-[30px] border border-gray-200 px-[24px] py-[12px] text-[14px] font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="rounded-[30px] border border-gray-200 px-[24px] py-[12px] text-[14px] font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Completed
              </TabsTrigger>
            </TabsList>

            <TabsContent className="pt-10" value="all">
              <TodoList status="all" />
            </TabsContent>
            <TabsContent className="pt-10" value="pending">
              <TodoList status="pending" />
            </TabsContent>
            <TabsContent className="pt-10" value="completed">
              <TodoList status="completed" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
